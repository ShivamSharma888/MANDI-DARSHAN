const express = require("express");
const router = express.Router();
const ParkingSlot = require("../models/ParkingSlot");
const { authMiddleware } = require("../middleware/authMiddleware");

// ----------------- Add a new parking slot -----------------
router.post("/", authMiddleware, async (req, res) => {
  try {
    const { district, place, parkingNumber } = req.body;
    if (!place || !parkingNumber)
      return res.status(400).json({ message: "Place and Parking Number required" });

    const existing = await ParkingSlot.findOne({ parkingNumber });
    if (existing)
      return res.status(400).json({ message: "Parking number already exists" });

    const slot = new ParkingSlot({ district, place, parkingNumber });
    await slot.save();
    res.status(201).json(slot);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ----------------- Get all slots -----------------
// ----------------- Get all slots -----------------
// Make this route public (no auth needed for read-only)
router.get("/", async (req, res) => {
  try {
    const now = new Date();

    // 1️⃣ Release expired reserved slots automatically
    await ParkingSlot.updateMany(
      { status: "reserved", reservedUntil: { $lte: now } },
      { $set: { status: "available", bookedBy: null, reservedUntil: null } }
    );

    // 2️⃣ Fetch all slots after releasing expired ones
    const slots = await ParkingSlot.find().populate("bookedBy", "name email");

    res.json(slots);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});


// ----------------- Get available slots -----------------
router.get("/available", async (req, res) => {
  try {
    const now = new Date();

    // Release expired reservations
    await ParkingSlot.updateMany(
      { status: "reserved", reservedUntil: { $lte: now } },
      { $set: { status: "available", bookedBy: null, reservedUntil: null } }
    );

    const slots = await ParkingSlot.find({
      status: "available"
    });

    res.json(slots);
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});


// ----------------- Book a slot (user request) -----------------
router.post("/book/:id", authMiddleware, async (req, res) => {
  try {
    const { durationMinutes, userId } = req.body;
    if (!userId || !durationMinutes)
      return res.status(400).json({ message: "UserId and duration required" });

    const slot = await ParkingSlot.findById(req.params.id);
    if (!slot) return res.status(404).json({ message: "Slot not found" });

    if (slot.status === "reserved" && slot.reservedUntil > new Date())
      return res.status(400).json({ message: "Slot already reserved" });

    slot.status = "reserved";
    slot.bookedBy = userId;
    slot.reservedUntil = new Date(Date.now() + durationMinutes * 60000);
    await slot.save();

    res.json({ message: "Slot reserved successfully. Waiting for manager approval", slot });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ----------------- Approve a reserved slot (manager) -----------------
router.post("/approve/:id", authMiddleware, async (req, res) => {
  try {
    const slot = await ParkingSlot.findById(req.params.id);
    if (!slot) return res.status(404).json({ message: "Slot not found" });

    if (slot.status !== "reserved")
      return res.status(400).json({ message: "Only reserved slots can be approved" });

    slot.status = "approved";
    await slot.save();

    res.json({ message: "Slot approved successfully", slot });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ----------------- Release a slot -----------------
router.post("/release/:id", authMiddleware, async (req, res) => {
  try {
    const slot = await ParkingSlot.findById(req.params.id);
    if (!slot) return res.status(404).json({ message: "Slot not found" });

    slot.status = "available";
    slot.bookedBy = null;
    slot.reservedUntil = null;
    await slot.save();

    res.json({ message: "Slot released successfully", slot });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// ----------------- Update a parking slot -----------------
router.put("/:id", authMiddleware, async (req, res) => {
  try {
    const { district, place, parkingNumber } = req.body;
    const slot = await ParkingSlot.findById(req.params.id);
    if (!slot) return res.status(404).json({ message: "Slot not found" });

    if (district) slot.district = district;
    if (place) slot.place = place;
    if (parkingNumber) slot.parkingNumber = parkingNumber;

    await slot.save();
    res.json({ message: "Slot updated successfully", slot });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});
router.post("/approve/:id", authMiddleware, async (req, res) => {
  try {
    const slot = await ParkingSlot.findById(req.params.id);
    if (!slot) return res.status(404).json({ message: "Slot not found" });

    if (!slot.bookedBy) return res.status(400).json({ message: "No booking to approve" });

    slot.status = "approved";
    await slot.save();

    res.json({ message: "Slot approved successfully", slot });
  } catch (err) {
    console.error(err); // important: see real backend error
    res.status(500).json({ message: "Server error", error: err.message });
  }
});


// ----------------- Delete a slot -----------------
router.delete("/:id", authMiddleware, async (req, res) => {
  try {
    const slot = await ParkingSlot.findById(req.params.id);
    if (!slot) return res.status(404).json({ message: "Slot not found" });
    await slot.deleteOne();
    res.json({ message: "Slot deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;
