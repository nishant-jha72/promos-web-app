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
  logoutUser
} = require('../controllers/user.controller');

// SPECIFIC ROUTES FIRST
router.post('/register', registerUser); // .
router.post('/login', loginUser); // 
router.get('/profile/me', protect, getProfile);
router.post('/logout', protect, logoutUser);
router.post('/updateUser', protect, updateUser);
// DYNAMIC ROUTES LAST
router.get('/', getAllUsers);
router.get('/:id', getUserById);

router.post('/changePassword', protect, changePassword);
router.delete('/deleteUser', protect, deleteUser);

module.exports = router;