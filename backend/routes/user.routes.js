const express = require('express');
const router = express.Router();
const { protect } = require('../middlewares/auth.middleware');
const {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUser,
  changePassword,
  deleteUser,
  getProfile,
  logoutUser,
  verifyEmail
} = require('../controllers/user.controller');

// SPECIFIC ROUTES FIRST
router.post('/register', registerUser); // .
router.post('/login', loginUser); // 
router.get("/verify-email" , verifyEmail); // Email verification route
router.get('/profile/me', protect, getProfile);
router.post('/logout', protect, logoutUser);
router.post('/updateUser', protect, updateUser);
// DYNAMIC ROUTES LAST
router.get('/', getAllUsers);
router.get('/:id', getUserById);

router.post('/changePassword', protect, changePassword);
router.delete('/deleteUser', protect, deleteUser);
const Inquiry = require('../models/message.model');
router.post('/submit', async (req, res) => {
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
    res.status(500).json({ success: false, message: "Server Error", error: error.message });
  }
});

module.exports = router;