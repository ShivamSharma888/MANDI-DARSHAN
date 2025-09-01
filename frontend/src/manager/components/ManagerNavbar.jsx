// src/components/ManagerNavbar.js
import React, { useState, useEffect, useRef } from "react";
import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE || "http://localhost:5000/api",
});

const ManagerNavbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [managerName, setManagerName] = useState("Manager");
  const dropdownRef = useRef();

  useEffect(() => {
    const fetchManager = async () => {
      try {
        const res = await API.get("/manager/me", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("ManagerToken")}`,
          },
        });
        if (res.data?.name) {
          setManagerName(res.data.name);
        }
      } catch (err) {
        console.error("Failed to fetch manager info", err);
      }
    };
    fetchManager();
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md px-4 py-3 sm:px-6 w-full">
      <div className="flex items-center justify-between flex-wrap max-w-7xl mx-auto">
        {/* Logo & Title */}
        <h1 className="text-lg sm:text-2xl font-extrabold text-blue-700 dark:text-white">
          Mandi Darshan
        </h1>

        {/* User Profile */}
        <div
          className="relative flex items-center gap-2 sm:gap-3 mt-2 sm:mt-0"
          ref={dropdownRef}
        >
          <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
            Hi, {managerName}
          </span>
          <button
            onClick={() => setDropdownOpen((prev) => !prev)}
            className="text-xl text-blue-600 dark:text-white focus:outline-none"
            aria-label="User menu"
          >
            <FaUserCircle />
          </button>

          {dropdownOpen && (
            <div className="absolute right-0 top-12 w-44 bg-white dark:bg-gray-800 border dark:border-gray-700 rounded-md shadow-lg z-50 animate-fade-in">
              <Link
                to="/manager/logout"
                onClick={() => setDropdownOpen(false)}
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
              >
                <FaSignOutAlt />
                Logout
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default ManagerNavbar;
