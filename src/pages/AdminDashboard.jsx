// src/pages/AdminDashboard.jsx
import { useState } from "react";
import Sidebar from "../components/admin/Sidebar";
import OverviewCards from "../components/admin/OverviewCards";

const AdminDashboard = () => {
  const [currentTab, setCurrentTab] = useState("Dashboard");

  return (
    <div className="flex">
      <Sidebar currentTab={currentTab} setCurrentTab={setCurrentTab} />

      <div className="flex-1 p-6 mt-14 sm:mt-0">
        <h1 className="text-2xl font-bold text-heading mb-6">{currentTab}</h1>

        {currentTab === "Dashboard" && <OverviewCards />}

        {currentTab === "Users" && (
          <p className="text-muted">This will show all users (list coming soon).</p>
        )}

        {currentTab === "Providers" && (
          <p className="text-muted">This will show provider KYC details (dummy for now).</p>
        )}

        {currentTab === "Bookings" && (
          <p className="text-muted">Here admin can view all bookings (backend later).</p>
        )}

        {currentTab === "Analytics" && (
          <p className="text-muted">Analytics dashboard will be added here.</p>
        )}
      </div>
    </div>
  );
}
export default AdminDashboard;
