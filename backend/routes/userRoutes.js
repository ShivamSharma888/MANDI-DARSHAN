const express = require("express");
const User = require("../models/User");
const { authMiddleware, authorize } = require("../middleware/authMiddleware");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const router = express.Router();

/**
 * @route   POST /api/users/register
 * @desc    Register new user (Admin only)
 * @access  Private (Admin)
 */
router.post("/register", authMiddleware, authorize("Admin"), async (req, res) => {
  try {
    const { userType, name, email, phone, password } = req.body;

    if (!userType || !name || !email || !phone || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      userType,
      name,
      email,
      phone,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * @route   POST /api/users/login
 * @desc    Login user & get token
 * @access  Public
 */
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, userType: user.userType },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({ message: "Login successful", token, user });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * @route   GET /api/users
 * @desc    Get all users (Admin only)
 * @access  Private (Admin)
 */
router.get("/", authMiddleware, authorize("Admin"), async (req, res) => {
  try {
    const users = await User.find().select("-password");
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * @route   GET /api/users/:id
 * @desc    Get single user by ID (Admin or self)
 * @access  Private
 */
router.get("/:id", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select("-password");
    if (!user) return res.status(404).json({ message: "User not found" });

    // Only Admin or self can view
    if (req.user.userType !== "Admin" && req.user.id !== user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * @route   PUT /api/users/:id
 * @desc    Update user (Admin or self)
 * @access  Private
 */
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { name, phone, password, userType } = req.body;
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    // Only Admin or self can update
    if (req.user.userType !== "Admin" && req.user.id !== user._id.toString()) {
      return res.status(403).json({ message: "Not authorized" });
    }

    if (name) user.name = name;
    if (phone) user.phone = phone;
    if (password) user.password = await bcrypt.hash(password, 10);
    if (userType && req.user.userType === "Admin") user.userType = userType; // Only admin can change type

    await user.save();
    res.json({ message: "User updated", user });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

/**
 * @route   DELETE /api/users/:id
 * @desc    Delete user (Admin only)
 * @access  Private (Admin)
 */
router.delete("/:id", authMiddleware, authorize("Admin"), async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: "User not found" });

    await user.deleteOne();
    res.json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
