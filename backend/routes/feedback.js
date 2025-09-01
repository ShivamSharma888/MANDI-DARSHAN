const express = require("express");
const router = express.Router();
const Feedback = require("../models/Feedback");
const { authMiddleware } = require("../middleware/authMiddleware");

// ----------------- Submit feedback -----------------
router.post("/", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const feedback = new Feedback({ name, email, message });
    await feedback.save();
    res.status(201).json({ message: "Feedback submitted successfully", feedback });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ----------------- Get all feedbacks (Admin) -----------------
router.get("/", authMiddleware, async (req, res) => {
  try {
    const feedbacks = await Feedback.find().sort({ createdAt: -1 });
    res.json(feedbacks);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
