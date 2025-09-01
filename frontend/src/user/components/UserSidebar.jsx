// src/user/components/UserSidebar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaParking, FaSignOutAlt, FaBars, FaTimes } from "react-icons/fa";

const UserSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const toggleSidebar = () => setSidebarOpen(prev => !prev);
  const closeSidebar = () => { if (window.innerWidth < 768) setSidebarOpen(false); };

  const baseStyle = "flex items-center gap-3 px-4 py-2.5 rounded-lg transition duration-150 ease-in-out hover:scale-[1.02]";
  const activeStyle = "bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold shadow-md";

  return (
    <>
      {/* Mobile Topbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 shadow-md z-50 flex items-center justify-between px-4 h-14">
        <div className="w-10 flex justify-start">
          <button onClick={toggleSidebar} className="text-gray-800 dark:text-white focus:outline-none">
            {sidebarOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
        <div className="absolute left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-lg font-extrabold text-blue-700 dark:text-white">Mandi Darshan</h1>
          <p className="text-xs text-gray-500 dark:text-gray-400">User Dashboard</p>
        </div>
        <div className="w-10" />
      </div>

      {/* Sidebar */}
      <aside className={`fixed top-0 left-0 h-screen w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 shadow-lg transform transition-transform duration-300 ease-in-out overflow-y-auto pt-14 md:pt-0 z-40 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:static`}>
        <div className="p-6 text-center border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-extrabold text-blue-700 dark:text-white tracking-tight">User Panel</h2>
        </div>

        <nav className="flex flex-col text-sm text-gray-800 dark:text-gray-200 p-4 pb-10">
          <NavLink to="/user/dashboard" onClick={closeSidebar} className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : ''}`}>
            <FaTachometerAlt /><span>Dashboard</span>
          </NavLink>
          <NavLink to="/user/book-parking" onClick={closeSidebar} className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : ''}`}>
            <FaParking /><span>Book Parking</span>
          </NavLink>
          <NavLink to="/user/user-feedback" onClick={closeSidebar} className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : ''}`}>
            <FaParking /><span>Feedback Form</span>
          </NavLink>
            <NavLink to="/user/user-testimonial" onClick={closeSidebar} className={({ isActive }) => `${baseStyle} ${isActive ? activeStyle : ''}`}>
            <FaParking /><span>Add Testimonial</span>
          </NavLink>
          <NavLink to="/logout" onClick={closeSidebar} className={`${baseStyle} hover:bg-red-100 dark:hover:bg-gray-700`}>
            <FaSignOutAlt /><span>Logout</span>
          </NavLink>
        </nav>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && <div className="fixed inset-0 bg-black bg-opacity-40 md:hidden z-30" onClick={toggleSidebar} />}
    </>
  );
};

export default UserSidebar;
