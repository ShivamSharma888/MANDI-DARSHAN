// routes/manager.js
const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware/authMiddleware");
const Manager = require("../models/User"); // Assuming manager is in User model

router.get("/me", authMiddleware, async (req, res) => {
  try {
    const manager = await Manager.findById(req.user._id).select("-password");
    if (!manager) return res.status(404).json({ message: "Manager not found" });
    res.json(manager);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
