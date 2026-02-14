const crypto = require('crypto'); // <--- Make sure this is here!
const nodemailer = require('nodemailer');
const asyncHandler = require('../utils/asyncHandler.util');
const ApiError = require('../utils/ApiError.util');
const ApiResponse = require('../utils/ApiResponse.util');
const User = require('../models/user.models');
const { generateAccessToken, generateRefreshToken } = require('../utils/jwtutils');


const cookieOptions = {
  httpOnly: true, 
  // MUST be true for 'none' to work. 
  // Since Render provides HTTPS by default, you can just set this to true.
  secure: true, 
  // MUST be 'none' for cross-domain (Netlify -> Render)
  sameSite: 'none', 
  maxAge: 7 * 24 * 60 * 60 * 1000 
};

const senddetailes =  asyncHandler(async (req, res) => {
  try {
    const { fullName, email, serviceType, message } = req.body;

    // Create a new entry in the database
    const newInquiry = new Inquiry({
      fullName,
      email,
      serviceType,
      message
    });

    await newInquiry.save();

    res.status(201).json({ 
      success: true, 
      message: "Inquiry received! Our team will contact you soon." 
    });
  } catch (error) {
    console.log("Error here")
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
});

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // 1. Validate required fields
  if (!name || !email || !password) {
    throw new ApiError(400, 'All fields are required');
  }

  // 2. Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ApiError(409, 'User with this email already exists');
  }

  // 3. Generate Verification Token
  const vToken = crypto.randomBytes(32).toString('hex');

  // 4. Create User (isVerified defaults to false in Schema)
  const user = await User.create({
    name,
    email,
    password, // Ensure your User model hashes this pre-save
    verificationToken: vToken,
    verificationTokenExpires: Date.now() + 24 * 60 * 60 * 1000 // Expire in 24h
  });

  // 5. Setup Nodemailer
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'jnishant794@gmail.com',
        pass: process.env.EMAIL_SENDER // Use environment variable for security
    }
  });

  const verificationUrl = `http://localhost:8000/api/v1/users/verify-email?token=${vToken}`;
  

  // 6. Send the Email
  try {
    await transporter.sendMail({
      from: '"Your App Name" <jnishant794@gmail.com>',
      to: email,
      subject: "Verify your email address",
      html: `<h1>Welcome ${name}!</h1>
             <p>Please click the link below to verify your email:</p>
             <a href="${verificationUrl}">Verify Email</a>`
    });
  } catch (error) {
    // If email fails, you might want to remove the user or handle it
    console.error("Email sending failed:", error);
  }

  // 7. Success Response (NO COOKIES SENT HERE)
  res.status(201).json(
    new ApiResponse(
      201, 
      { userId: user._id }, 
      'Registration successful! Please check your email to verify your account.'
    )
  );
});


const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // 1. Validate required fields
  if (!email || !password) {
    throw new ApiError(400, 'Email and password are required');
  }

  // 2. Find user and include password
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    throw new ApiError(401, 'Invalid email or password');
  }

  // 3. THE GATEKEEPER: Check if email is verified
  // If not verified, we do not issue cookies
  if (!user.isVerified) {
    throw new ApiError(403, 'Your email is not verified. Please check your inbox to verify your account.');
  }

  // 4. Check password
  const isPasswordValid = await user.comparePassword(password);

  if (!isPasswordValid) {
    throw new ApiError(401, 'Invalid email or password');
  }

  // 5. Generate tokens
  const accessToken = generateAccessToken(user._id);
  const refreshToken = generateRefreshToken(user._id);

  // 6. Save refresh token to database
  user.refreshToken = refreshToken;
  await user.save();

  // Clean up user object for response
  const loggedInUser = await User.findById(user._id);

  // 7. Set Cookies
  res.cookie('accessToken', accessToken, cookieOptions);
  res.cookie('refreshToken', refreshToken, {
    ...cookieOptions,
    maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days
  });

  res.status(200).json(
    new ApiResponse(
      200, 
      { user: loggedInUser }, 
      'Login successful'
    )
  );
});


const getAllUsers = asyncHandler(async (req, res) => {
  const users = await User.find();

  res.status(200).json(
    new ApiResponse(200, users, 'Users fetched successfully')
  );
});


const getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    throw new ApiError(404, 'User not found');
  }

  res.status(200).json(
    new ApiResponse(200, user, 'User found successfully')
  );
});


const updateUser = asyncHandler(async (req, res) => {
  if (!req.user?._id) {
    throw new ApiError(401, 'Unauthorized');
  }

  const { name, email  , password} = req.body;

  const user = await User.findById(req.user._id);

  if (!user) {
    throw new ApiError(404, 'User not found');
  }

  if (name !== undefined && name.trim() === '') {
    throw new ApiError(400, 'Name cannot be empty');
  }

  if (email !== undefined && email.trim() === '') {
    throw new ApiError(400, 'Email cannot be empty');
  }

  if (email && email !== user.email) {
    const emailExists = await User.findOne({ email: email.toLowerCase() });
    if (emailExists) {
      throw new ApiError(409, 'Email already in use');
    }
    user.email = email.toLowerCase();
  }

  if (name) {
    user.name = name;
  }
if (password) {if (password.length < 6) { throw new ApiError(400, 'Password must be at least 6 characters long'); } user.password = password; } 

  const updatedUser = await user.save();

  res.status(200).json(
    new ApiResponse(200, updatedUser, 'User updated successfully')
  );
});


const changePassword = asyncHandler(async (req, res) => {
  const { currentPassword, newPassword } = req.body;

  // Validate required fields
  if (!currentPassword || !newPassword) {
    throw new ApiError(400, 'Current password and new password are required');
  }

  // Validate new password length
  if (newPassword.length < 6) {
    throw new ApiError(400, 'New password must be at least 6 characters long');
  }

  // Find user with password
  const user = await User.findById(req.user._id).select('+password');

  if (!user) {
    throw new ApiError(404, 'User not found');
  }

  // Verify current password
  const isPasswordValid = await user.comparePassword(currentPassword);

  if (!isPasswordValid) {
    throw new ApiError(401, 'Current password is incorrect');
  }

  // Update password
  user.password = newPassword;
  await user.save();

  res.status(200).json(
    new ApiResponse(200, null, 'Password changed successfully')
  );
});


const deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    throw new ApiError(404, 'User not found');
  }

  await User.findByIdAndDelete(req.params.id);

  res.status(200).json(
    new ApiResponse(200, null, 'User deleted successfully')
  );
});


const getProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id);

  if (!user) {
    throw new ApiError(404, 'User not found');
  }

  res.status(200).json(
    new ApiResponse(200, user, 'Profile fetched successfully')
  );
});


const logoutUser = asyncHandler(async (req, res) => {

  await User.findByIdAndUpdate(
    req.user._id,
    { $unset: { refreshToken: 1 } },
    { new: true }
  );

  res.clearCookie('accessToken');
  res.clearCookie('refreshToken');
  
  res.status(200).json(
    new ApiResponse(200, null, 'Logout successful')
  );
});

const verifyEmail = asyncHandler(async (req, res) => {
  const { token } = req.query;

    // Find user by token and ensure token hasn't expired
    const user = await User.findOne({
        verificationToken: token,
        verificationTokenExpires: { $gt: Date.now() }
    });

    if (!user) return res.status(400).json({ message: "Token invalid or expired." });

    // Mark as verified and clear tokens
    user.isVerified = true;
    user.verificationToken = undefined;
    user.verificationTokenExpires = undefined;
    await user.save();

    res.json({ message: "Email verified successfully! You can now log in." });
});

module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUser,
  changePassword,
  deleteUser,
  getProfile,
  logoutUser,
  senddetailes,
  verifyEmail
};