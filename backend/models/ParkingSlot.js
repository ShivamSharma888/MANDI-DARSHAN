// models/ParkingSlot.js
const mongoose = require("mongoose");

const parkingSlotSchema = new mongoose.Schema({
  district: {
    type: String,
    required: true,
    default: "Mandi",
  },
  place: {
    type: String,
    required: true,
  },
  parkingNumber: {
    type: String,
    required: true,
    unique: true, // each parking number must be unique
  },
  status: {
    type: String,
    enum: ["available", "reserved"], // only these two statuses
    default: "available",
  },
  reservedUntil: {
    type: Date, // timestamp when the slot will be free
    default: null,
  },
  bookedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // user who booked the slot (optional)
    default: null,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

parkingSlotSchema.pre("save", function (next) {
  this.updatedAt = Date.now();
  next();
});

const ParkingSlot = mongoose.model("ParkingSlot", parkingSlotSchema);
module.exports = ParkingSlot;
