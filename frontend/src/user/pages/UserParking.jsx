import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaClock, FaMapMarkerAlt, FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const UserParking = () => {
  const [slots, setSlots] = useState([]);
  const [loading, setLoading] = useState(true);
  const [duration, setDuration] = useState(60); // default 60 mins
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const API = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const token = localStorage.getItem("token");

  const axiosInstance = axios.create({
    baseURL: `${API}/api/parking`,
    headers: { Authorization: `Bearer ${token}` },
  });

  // Fetch available parking slots
  const fetchSlots = async () => {
    setLoading(true);
    setError("");
    setSuccess("");
    try {
      const res = await axiosInstance.get("/available");
      setSlots(res.data);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch parking slots");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSlots();
  }, []);

  // Handle booking
  const handleBook = async (slotId) => {
    setError("");
    setSuccess("");

    try {
      const userStr = localStorage.getItem("user");
      if (!userStr) {
        setError("User not logged in");
        return;
      }

      const user = JSON.parse(userStr);
      const userId = user._id || user.id; // handle both _id or id from backend
      if (!userId) {
        setError("Invalid user data");
        console.log("Booking with userId:", userId, "duration:", duration);
        return;
      }

      if (!duration || duration <= 0) {
        setError("Booking duration is required and must be greater than 0");
        return;
      }

      const res = await axiosInstance.post(`/book/${slotId}`, {
        userId,
        durationMinutes: Number(duration),
      });

      setSuccess(res.data.message || "Parking booked successfully!");
      fetchSlots(); // refresh slots
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Booking failed");
    }
  };

  if (loading) return <p className="p-6 text-gray-500">Loading parking slots...</p>;

  return (
    <div className="p-6 lg:p-10">
      <h2 className="text-3xl font-bold mb-6 text-gray-800 dark:text-white">
        Book a Parking Slot
      </h2>

      {/* Duration Input */}
      <div className="mb-6 flex items-center gap-3">
        <FaClock className="text-gray-600 dark:text-gray-300" />
        <label className="text-gray-700 dark:text-gray-300 font-medium">
          Booking Duration (minutes):
        </label>
        <input
          type="number"
          value={duration}
          min={15}
          max={480}
          onChange={(e) => setDuration(e.target.value)}
          className="border px-3 py-1 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 w-24"
        />
      </div>

      {/* Success & Error Messages */}
      {error && <p className="text-red-500 mb-4">{error}</p>}
      {success && <p className="text-green-500 mb-4">{success}</p>}

      {/* Slots Grid */}
      {slots.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">
          No available parking slots currently.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {slots.map((slot) => (
            <div
              key={slot._id}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-xl transition flex flex-col justify-between"
            >
              <div>
                <p className="text-gray-700 dark:text-gray-300 font-semibold mb-1 flex items-center">
                  <FaMapMarkerAlt className="mr-2" /> Place: {slot.place}
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-2">
                  Parking Number: <span className="font-medium">{slot.parkingNumber}</span>
                </p>
                <p
                  className={`capitalize font-medium flex items-center ${
                    slot.status === "available" ? "text-green-600" : "text-red-600"
                  }`}
                >
                  Status:{" "}
                  {slot.status === "available" ? (
                    <FaCheckCircle className="ml-2" />
                  ) : (
                    <FaTimesCircle className="ml-2" />
                  )}
                </p>
              </div>

              <button
                onClick={() => handleBook(slot._id)}
                disabled={slot.status !== "available"}
                className={`mt-4 px-4 py-2 rounded-lg text-white font-semibold transition 
                  ${slot.status === "available" ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"}`}
              >
                {slot.status === "available" ? "Book Slot" : "Unavailable"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UserParking;
