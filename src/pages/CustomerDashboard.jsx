import React from "react";
import { CalendarDays, Clock, User, Search } from "lucide-react";
import { Link } from "react-router-dom";

const recentBookings = [
  {
    id: 1,
    provider: "James Mwangi",
    service: "Painting",
    date: "2024-06-25",
    time: "10:00 AM",
    status: "Approved",
  },
  {
    id: 2,
    provider: "Sarah Wanjiku",
    service: "Cleaning",
    date: "2024-06-28",
    time: "02:00 PM",
    status: "Pending",
  },
  {
    id: 3,
    provider: "John Otieno",
    service: "Plumbing",
    date: "2024-07-01",
    time: "09:30 AM",
    status: "Completed",
  },
];

const CustomerDashboard = () => {
  return (
    <div className="pt-24 px-4 max-w-6xl mx-auto min-h-screen">
      {/* 👋 Welcome Header */}
      <h1 className="text-2xl font-bold text-heading mb-6">Welcome back, Sejjo 👋</h1>

      {/* 🔢 Dashboard Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        <div className="bg-blue-50 p-4 rounded shadow-sm">
          <p className="text-sm text-muted">Total Bookings</p>
          <p className="text-xl font-bold text-blue-700 mt-1">12</p>
        </div>
        <div className="bg-yellow-50 p-4 rounded shadow-sm">
          <p className="text-sm text-muted">Upcoming</p>
          <p className="text-xl font-bold text-yellow-700 mt-1">2</p>
        </div>
        <div className="bg-green-50 p-4 rounded shadow-sm">
          <p className="text-sm text-muted">Completed</p>
          <p className="text-xl font-bold text-green-700 mt-1">8</p>
        </div>
        <div className="bg-purple-50 p-4 rounded shadow-sm">
          <p className="text-sm text-muted">Wallet Balance</p>
          <p className="text-xl font-bold text-purple-700 mt-1">KES 1,250</p>
        </div>
      </div>

      {/* 📅 Recent Bookings */}
      <h2 className="text-xl font-semibold text-heading mb-4">Recent Bookings</h2>
      <div className="space-y-4">
        {recentBookings.map((booking) => (
          <div
            key={booking.id}
            className="border border-gray-200 p-4 rounded bg-white shadow-sm"
          >
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <div>
                <h3 className="text-lg font-semibold text-brand">
                  {booking.service} with {booking.provider}
                </h3>
                <p className="text-sm text-muted">
                  <CalendarDays className="inline-block w-4 h-4 mr-1" />
                  {booking.date} at {booking.time}
                </p>
              </div>
              <span
                className={`text-sm font-medium px-3 py-1 rounded-full ${
                  booking.status === "Approved"
                    ? "bg-green-100 text-green-700"
                    : booking.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : booking.status === "Completed"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                {booking.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* ⚡ Quick Actions */}
      <div className="mt-10 grid sm:grid-cols-3 gap-4">
        <Link
          to="/"
          className="bg-brand text-white text-center py-3 rounded hover:bg-heading transition"
        >
          <Search className="inline-block w-4 h-4 mr-1" /> Browse Services
        </Link>
        <Link
          to="/my-bookings"
          className="bg-gray-800 text-white text-center py-3 rounded hover:bg-gray-900 transition"
        >
          <Clock className="inline-block w-4 h-4 mr-1" /> View All Bookings
        </Link>
        <Link
          to="/profile"
          className="bg-green-600 text-white text-center py-3 rounded hover:bg-green-700 transition"
        >
          <User className="inline-block w-4 h-4 mr-1" /> Edit Profile
        </Link>
      </div>
    </div>
  );
};

export default CustomerDashboard;
