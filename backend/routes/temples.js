// backend/routes/temples.js
const express = require("express");
const Temple = require("../models/Temple");
const { authMiddleware, authorize } = require("../middleware/authMiddleware"); // optional if admin-only

const router = express.Router();

// Add a new temple (Admin only)
router.post("/", authMiddleware, authorize("Admin"), async (req, res) => {
  try {
    const { name, description, mapLink, images, highlights } = req.body;
    const temple = new Temple({ name, description, mapLink, images, highlights });
    await temple.save();
    res.status(201).json({ message: "Temple added successfully", temple });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Get all temples
router.get("/", async (req, res) => {
  try {
    const temples = await Temple.find();
    res.json(temples);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

// Get temple by ID
router.get("/:id", async (req, res) => {
  try {
    const temple = await Temple.findById(req.params.id);
    if (!temple) return res.status(404).json({ message: "Temple not found" });
    res.json(temple);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
