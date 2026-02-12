const asyncHandler = require('../utils/asyncHandler.util');
const ApiError = require('../utils/ApiError.util');
const ApiResponse = require('../utils/ApiResponse.util');
const User = require('../models/user.models');
const { generateAccessToken, generateRefreshToken } = require('../utils/jwtutils');


const cookieOptions = {
  httpOnly: true, // Cannot be accessed by JavaScript (XSS protection)
  secure: process.env.NODE_ENV === 'production', // HTTPS only in production
  sameSite: 'strict', // CSRF protection
  maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days in milliseconds
};



const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  // Validate required fields
  if (!name || !email || !password) {
    throw new ApiError(400, 'All fields are required', [
      'Name, email, and password must be provided'
    ]);
  }

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    throw new ApiError(409, 'User with this email already exists');
  }

  // Create user
  const user = await User.create({
    name,
    email,
    password
  });

  // Return user without password
  const createdUser = await User.findById(user._id);

  // Generate tokens
  const accessToken = generateAccessToken(createdUser._id);
  const refreshToken = generateRefreshToken(createdUser._id);

  // Save refresh token to database
  createdUser.refreshToken = refreshToken;
  await createdUser.save();


  res.cookie('accessToken', accessToken, cookieOptions);
  res.cookie('refreshToken', refreshToken, {
    ...cookieOptions,
    maxAge: 30 * 24 * 60 * 60 * 1000
  });


  res.status(201).json(
    new ApiResponse(
      201, 
      { 
        user: createdUser,
        accessToken,
        refreshToken
      }, 
      'User registered successfully'
    )
  );
});


const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Validate required fields
  if (!email || !password) {
    throw new ApiError(400, 'Email and password are required');
  }

  // Find user and include password for comparison
  const user = await User.findOne({ email }).select('+password');

  if (!user) {
    throw new ApiError(401, 'Invalid email or password');
  }

  // Check password
  const isPasswordValid = await user.comparePassword(password);

  if (!isPasswordValid) {
    throw new ApiError(401, 'Invalid email or password');
  }

  // Remove password from respons

  // Generate tokens
  const accessToken = generateAccessToken(user._id);
  const refreshToken = generateRefreshToken(user._id);

  // Save refresh token to database
  user.refreshToken = refreshToken;
  await user.save();
  this.password = undefined; // Remove password from response
   res.cookie('accessToken', accessToken, cookieOptions);

  res.cookie('refreshToken', refreshToken, {
    ...cookieOptions,
    maxAge: 30 * 24 * 60 * 60 * 1000 // 30 days for refresh token
  });

  res.status(200).json(
    new ApiResponse(
      200, 
      { 
        user
      }, 
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

module.exports = {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUser,
  changePassword,
  deleteUser,
  getProfile,
  logoutUser
};