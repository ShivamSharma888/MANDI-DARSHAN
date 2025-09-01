// src/components/UserLayout.js
import React from "react";
import Sidebar from "./components/UserSidebar";
import UserNavbar from "./components/UserNavbar";
import { Outlet } from "react-router-dom";

const UserLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <Sidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Navbar */}
        <UserNavbar />

        {/* Page content */}
        <main className="flex-1 p-6 mt-14 md:mt-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default UserLayout;
