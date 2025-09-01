// src/components/Parking/ParkingWithFilter.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Car } from "lucide-react";
import axios from "axios";

const ParkingWithFilter = () => {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState({}); // countdowns

  const API = import.meta.env.VITE_API_URL || "http://localhost:5000";

  // Fetch parking slots from backend
  const fetchParkingSlots = async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API}/api/parking`);
      setSlots(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Error fetching parking slots:", err);
      setSlots([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchParkingSlots();
  }, []);

  // Live countdown for reserved slots
  useEffect(() => {
    const interval = setInterval(() => {
      const newTimes = {};
      slots.forEach(slot => {
        if (slot.status === "reserved" && slot.reservedUntil) {
          const diff = new Date(slot.reservedUntil) - new Date();
          newTimes[slot._id] = diff > 0 ? Math.floor(diff / 1000) : 0;
        }
      });
      setTimeLeft(newTimes);
    }, 1000);
    return () => clearInterval(interval);
  }, [slots]);

  const getSlotStyle = (status) => {
    switch (status) {
      case "available":
        return { bg: "bg-green-50", border: "border-green-300", labelBg: "bg-green-200", labelText: "text-green-800" };
      case "reserved":
        return { bg: "bg-red-50", border: "border-red-300", labelBg: "bg-red-200", labelText: "text-red-800" };
      case "approved":
        return { bg: "bg-blue-50", border: "border-blue-300", labelBg: "bg-blue-200", labelText: "text-blue-800" };
      default:
        return { bg: "bg-gray-50", border: "border-gray-300", labelBg: "bg-gray-200", labelText: "text-gray-800" };
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <section className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
{/* 🌟 Hero Section */}
<div className="relative h-80 md:h-96 flex items-center justify-center bg-gray-900">
  {/* Background Image */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: `url(${"https://thearchitectsdiary.com/wp-content/uploads/2020/10/Parking-101-Creating-the-Perfect-Car-Park.jpg"})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  ></div>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/50"></div>

  {/* Heading + Subtitle */}
  <div className="relative z-10 text-center px-6">
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg">
      Parking Records – Mandi
    </h1>
    <p className="mt-4 text-gray-200 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
      View live status of parking slots across Mandi district.  
      This page is for <span className="font-semibold text-yellow-300">display only</span>,  
      not for booking or token generation.
    </p>
  </div>
</div>


      {/* 📋 Parking Records */}
      <div className="flex-1 p-6 lg:p-10 overflow-y-auto flex flex-col items-center">
        {loading ? (
          <p className="text-gray-500 dark:text-gray-400 mt-10">Loading parking records...</p>
        ) : slots.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-6xl mt-6">
            {slots.map((slot, i) => {
              const style = getSlotStyle(slot.status);
              return (
                <motion.div
                  key={slot._id || i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.02, duration: 0.3 }}
                  className={`rounded-xl shadow-md p-4 relative hover:shadow-lg transition flex flex-col justify-between ${style.bg} ${style.border}`}
                  style={{ minHeight: "200px" }}
                >
                  <div>
                    {/* Status + Time Left */}
                    <div className="flex justify-between items-center mb-3">
                      <span className={`px-2 py-1 text-xs font-semibold rounded ${style.labelBg} ${style.labelText}`}>
                        Status: {slot.status?.toUpperCase()}
                      </span>
                      {slot.status === "reserved" && slot.reservedUntil && (
                        <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                          Time Left:{" "}
                          {timeLeft[slot._id] !== undefined
                            ? formatTime(timeLeft[slot._id])
                            : "--:--"}
                        </span>
                      )}
                    </div>

                    {/* Booked By */}
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                      <span className="font-bold">Booked By:</span>{" "}
                      {slot.bookedBy?.name || "No Owner"}
                    </p>

                    {/* Location */}
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 mt-1">
                      <span className="font-bold">Location:</span>{" "}
                      {slot.district}, {slot.place}
                    </p>

                    {/* Parking Number */}
                    <p className="text-sm font-semibold text-gray-700 dark:text-gray-200 mt-1">
                      <span className="font-bold">Parking No:</span>{" "}
                      {slot.parkingNumber || "N/A"}
                    </p>
                  </div>

                  {/* Car icon at bottom-center */}
                  <div className="flex justify-center mt-4">
                    <Car
                      size={26}
                      className={
                        slot.status === "reserved"
                          ? "text-red-500"
                          : slot.status === "approved"
                          ? "text-blue-500"
                          : "text-green-500"
                      }
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        ) : (
          <p className="text-gray-600 dark:text-gray-400 mt-10">
            ❌ No parking records found.
          </p>
        )}
      </div>
    </section>
  );
};

export default ParkingWithFilter;
