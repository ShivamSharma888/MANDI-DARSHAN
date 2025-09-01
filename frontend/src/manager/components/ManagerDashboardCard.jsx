// src/components/ParkingDashboardCard.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaParking, FaCheckCircle, FaTimesCircle, FaCar } from "react-icons/fa";

// ✅ Setup API client
const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || "http://localhost:5000",
});

const ParkingDashboardCard = () => {
  const [parkings, setParkings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    API.get("/parking/stats") // ✅ Your backend should return parking data
      .then((res) => {
        setParkings(res.data); // [{ name, totalSlots, bookedSlots }]
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch parking stats:", err);
        setError("Unable to load parking data.");
        setLoading(false);
      });
  }, []);

  return (
    <div className="w-full px-2 sm:px-4 lg:px-8 py-6">
      {loading ? (
        <p className="text-center text-gray-500 dark:text-gray-300">
          Loading parking dashboard...
        </p>
      ) : error ? (
        <p className="text-center text-red-600 dark:text-red-400">{error}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {parkings.map((p, index) => {
            const available = p.totalSlots - p.bookedSlots;
            return (
              <div
                key={index}
                className="rounded-2xl p-5 flex flex-col items-center text-center shadow-md hover:shadow-xl transition duration-300 bg-blue-100 dark:bg-blue-900/30"
              >
                {/* Parking Name */}
                <div className="flex items-center gap-2 mb-3">
                  <FaParking className="text-3xl text-blue-700" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {p.name} Parking
                  </h3>
                </div>

                {/* Stats */}
                <div className="w-full flex justify-around text-lg font-semibold">
                  <div className="flex flex-col items-center">
                    <FaCar className="text-gray-600 mb-1" />
                    <span>{p.totalSlots}</span>
                    <span className="text-sm text-gray-600">Total</span>
                  </div>
                  <div className="flex flex-col items-center text-red-600">
                    <FaTimesCircle className="mb-1" />
                    <span>{p.bookedSlots}</span>
                    <span className="text-sm">Booked</span>
                  </div>
                  <div className="flex flex-col items-center text-green-600">
                    <FaCheckCircle className="mb-1" />
                    <span>{available}</span>
                    <span className="text-sm">Available</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ParkingDashboardCard;
