// src/components/AdminDashboardCards.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaUserShield, FaCar, FaUsers } from "react-icons/fa";

const AdminDashboardCards = () => {
  const [counts, setCounts] = useState({ Admin: 0, ParkingOwner: 0, User: 0 });
  const [loading, setLoading] = useState(true);

  const API = import.meta.env.VITE_API_URL || "http://localhost:5000";
  const token = localStorage.getItem("token");
  const userName = JSON.parse(localStorage.getItem("user"))?.name || "Admin";

  const axiosInstance = axios.create({
    baseURL: `${API}/api`,
    headers: { Authorization: `Bearer ${token}` },
  });

  const fetchUserCounts = async () => {
    setLoading(true);
    try {
      const res = await axiosInstance.get("/users");
      const users = Array.isArray(res.data) ? res.data : [];
      const newCounts = { Admin: 0, ParkingOwner: 0, User: 0 };
      users.forEach((u) => {
        if (newCounts[u.userType] !== undefined) newCounts[u.userType]++;
      });
      setCounts(newCounts);
    } catch (err) {
      console.error("Error fetching users:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserCounts();
  }, []);

  if (loading)
    return <div className="p-6 text-gray-500 font-medium">Loading dashboard...</div>;

  const cardData = [
    { label: "Admins", count: counts.Admin, color: "bg-blue-500", icon: <FaUserShield size={30} /> },
    { label: "Parking Owners", count: counts.ParkingOwner, color: "bg-green-500", icon: <FaCar size={30} /> },
    { label: "Users", count: counts.User, color: "bg-purple-500", icon: <FaUsers size={30} /> },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Card */}
      <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg flex flex-col md:flex-row justify-between items-center transition-transform hover:scale-105">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white">
            Welcome, {userName}
          </h2>
          <p className="mt-2 text-gray-500 dark:text-gray-300 text-lg">
            This is your admin dashboard.
          </p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cardData.map((card) => (
          <div
            key={card.label}
            className={`${card.color} text-white p-6 rounded-2xl shadow-lg flex flex-col justify-center items-center transition-transform hover:scale-105`}
          >
            <div className="mb-3">{card.icon}</div>
            <h3 className="text-lg font-semibold">{card.label}</h3>
            <p className="text-4xl font-bold mt-2">{card.count}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDashboardCards;
