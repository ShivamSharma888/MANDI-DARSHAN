const express = require('express');
const router = express.Router();
const { authMiddleware, authorize } = require('../middleware/authMiddleware');

// Protected route for all logged-in users
router.get('/profile', authMiddleware, (req, res) => {
  res.json({ user: req.user });
});

// Only Admin can access
router.get('/admin', authMiddleware, authorize('Admin'), (req, res) => {
  res.json({ message: 'Welcome Admin' });
});

// Only Parking Owner can access
router.get('/parking', authMiddleware, authorize('Parking Owner'), (req, res) => {
  res.json({ message: 'Welcome Parking Owner' });
});

module.exports = router;
