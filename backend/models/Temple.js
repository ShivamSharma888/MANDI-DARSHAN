// backend/models/Temple.js
const mongoose = require("mongoose");

const templeSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    mapLink: { type: String, required: true },
    images: [{ type: String }], // array of image URLs
    highlights: [{ type: String }], // array of highlight strings
  },
  { timestamps: true } // automatically adds createdAt and updatedAt
);

module.exports = mongoose.model("Temple", templeSchema);
