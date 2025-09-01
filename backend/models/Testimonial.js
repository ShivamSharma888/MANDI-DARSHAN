// models/Testimonial.js
const mongoose = require("mongoose");

const testimonialSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  text: { type: String, required: true },
  image: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("Testimonial", testimonialSchema);
