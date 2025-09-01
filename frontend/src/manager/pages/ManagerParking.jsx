import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCheck, FaTimes, FaTrash } from "react-icons/fa";

const ManagerParking = () => {
  const [slots, setSlots] = useState([]);
  const [form, setForm] = useState({ district: "Mandi", place: "", parkingNumber: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const token = localStorage.getItem("token");

  const axiosInstance = axios.create({
    baseURL: `${API}/api/parking`,
    headers: { Authorization: `Bearer ${token}` },
  });

  // Fetch all parking slots
  const fetchSlots = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get("/");
      setSlots(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Failed to fetch slots");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSlots();
  }, []);

  // Add a new slot
  const handleAddSlot = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/", form);
      setForm({ district: "Mandi", place: "", parkingNumber: "" });
      fetchSlots();
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed to add slot");
    }
  };

  // Approve reserved slot
  const handleApprove = async (slot) => {
    try {
      if (!slot.bookedBy?._id) return alert("No booking request to approve.");
      await axiosInstance.post(`/approve/${slot._id}`);
      fetchSlots();
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed to approve booking");
    }
  };

  // Deny reserved slot
  const handleDeny = async (slot) => {
    try {
      await axiosInstance.post(`/release/${slot._id}`);
      fetchSlots();
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Failed to deny booking");
    }
  };

  // Delete slot
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this parking slot?")) return;
    try {
      await axiosInstance.delete(`/${id}`);
      fetchSlots();
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Delete failed");
    }
  };

  return (
    <div className="p-6 lg:p-10">
      <h2 className="text-3xl font-bold mb-6">Manage Parking Slots</h2>

      {/* Add Slot Form */}
      <form
        onSubmit={handleAddSlot}
        className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"
      >
        <input
          placeholder="District"
          value={form.district}
          onChange={(e) => setForm({ ...form, district: e.target.value })}
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          placeholder="Place"
          value={form.place}
          onChange={(e) => setForm({ ...form, place: e.target.value })}
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          placeholder="Parking Number"
          value={form.parkingNumber}
          onChange={(e) => setForm({ ...form, parkingNumber: e.target.value })}
          className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <button
          type="submit"
          className="bg-blue-600 text-white rounded-lg px-6 py-2 hover:bg-blue-700 transition"
        >
          Add Slot
        </button>
      </form>

      {/* Slots Table */}
      {loading ? (
        <p className="text-gray-500">Loading parking slots...</p>
      ) : (
        <div className="overflow-x-auto bg-white dark:bg-gray-800 rounded-xl shadow-md">
          <table className="min-w-full text-left">
            <thead className="bg-gray-100 dark:bg-gray-700">
              <tr>
                <th className="p-3">District</th>
                <th className="p-3">Place</th>
                <th className="p-3">Parking Number</th>
                <th className="p-3">Status</th>
                <th className="p-3">Reserved Until</th>
                <th className="p-3">Booked By</th>
                <th className="p-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {slots.map((slot) => (
                <tr
                  key={slot._id}
                  className="border-b hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <td className="p-3">{slot.district}</td>
                  <td className="p-3">{slot.place}</td>
                  <td className="p-3">{slot.parkingNumber}</td>
                  <td className="p-3 capitalize">{slot.status}</td>
                  <td className="p-3">
                    {slot.reservedUntil ? new Date(slot.reservedUntil).toLocaleString() : "-"}
                  </td>
                  <td className="p-3">{slot.bookedBy ? slot.bookedBy.name || slot.bookedBy : "-"}</td>
                 <td className="p-3 flex gap-2 flex-wrap">
  {slot.status === "reserved" && slot.bookedBy && (
    <>
      {/* Remove Approve button */}
      {/* <button
        onClick={() => handleApprove(slot)}
        className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded flex items-center"
      >
        <FaCheck className="mr-1" /> Approve
      </button> */}

      <button
        onClick={() => handleDeny(slot)}
        className="bg-red-600 hover:bg-red-700 text-white px-3 py-1 rounded flex items-center"
      >
        <FaTimes className="mr-1" /> Deny
      </button>
    </>
  )}
  <button
    onClick={() => handleDelete(slot._id)}
    className="bg-gray-600 hover:bg-gray-700 text-white px-3 py-1 rounded flex items-center"
  >
    <FaTrash className="mr-1" /> Delete
  </button>
</td>

                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {error && <p className="text-red-500 mt-3">{error}</p>}
    </div>
  );
};

export default ManagerParking;
