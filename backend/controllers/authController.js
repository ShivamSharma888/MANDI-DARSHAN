// backend/controllers/authController.js
const User = require('../models/User'); // Adjust path if needed
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Load JWT secret from environment
const JWT_SECRET = process.env.JWT_SECRET;

// ------------------- REGISTER -------------------
exports.register = async (req, res) => {
  try {
    const { userType, name, email, phone, password } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email already registered' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = new User({
      userType,
      name,
      email,
      phone,
      password: hashedPassword,
    });

    await user.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Register Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// ------------------- LOGIN -------------------
exports.login = async (req, res) => {
  try {
    const { userType, email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email, userType });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const token = jwt.sign(
      { id: user._id, userType: user.userType },
      JWT_SECRET,
      { expiresIn: '7d' } // token valid for 7 days
    );

    res.status(200).json({
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        userType: user.userType,
      },
    });
  } catch (error) {
    console.error('Login Error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
