import React from "react";
import DashboardCards from "../components/UserDashboardCard";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Overview</h2>
      <DashboardCards /> {/* This loads user preferences */}
    </div>
  );
};

export default Dashboard;
