// src/manager/ManagerLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import ManagerSidebar from "./components/ManagerSidebar";
import ManagerNavbar from "./components/ManagerNavbar";

const ManagerLayout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <ManagerSidebar />

      {/* Main content area */}
      <div className="flex-1 flex flex-col overflow-y-auto">
        {/* Navbar */}
        <ManagerNavbar />

        {/* Page content */}
        <main className="flex-1 p-6 mt-14 md:mt-0">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default ManagerLayout;
