import React from "react";

const DashboardCards = () => {
  const userName = localStorage.getItem("userName") || "User";

  return (
    <div className="flex items-center justify-center h-64">
      <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
        👋 Welcome, {userName}!
      </h1>
    </div>
  );
};

export default DashboardCards;
