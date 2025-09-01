// backend/routes/testimonial.js
const express = require("express");
const router = express.Router();
const Testimonial = require("../models/Testimonial");
const { authMiddleware } = require("../middleware/authMiddleware"); // make sure this exists

// ----------------- Add a testimonial by logged-in user -----------------
router.post("/user", authMiddleware, async (req, res) => {
  try {
    const { text, image } = req.body;
    const user = req.user;

    if (!text) return res.status(400).json({ message: "Testimonial text is required" });

    const testimonial = new Testimonial({
      userId: user._id,  // store user ObjectId
      text,
      image: image || "",
    });

    await testimonial.save();

    res.status(201).json({
      message: "Testimonial submitted successfully",
      testimonial,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});


// ----------------- Get all testimonials (populate user names) -----------------
router.get("/", async (req, res) => {
  try {
    const testimonials = await Testimonial.find()
      .populate("userId", "name") // populate the user name
      .sort({ createdAt: -1 });

    const formatted = testimonials.map((t) => ({
      _id: t._id,
      name: t.userId?.name || "Anonymous", // fallback only if populate failed
      text: t.text,
      image: t.image || "",
      createdAt: t.createdAt,
    }));

    res.json(formatted);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});


module.exports = router;
