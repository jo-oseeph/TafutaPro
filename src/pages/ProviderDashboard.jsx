import { useState } from "react";
import {
  CheckCircle,
  XCircle,
  CalendarDays,
  Wallet,
  Star,
  ClipboardList,
} from "lucide-react";

const dummyStats = {
  pending: 3,
  completed: 21,
  earnings: "KES 42,500",
  rating: 4.7,
};

const dummyBookings = [
  {
    id: 1,
    customer: "John Kimani",
    service: "Interior Painting",
    date: "2025-06-23",
    time: "2:00 PM",
    note: "Paint bedroom walls",
  },
  {
    id: 2,
    customer: "Grace Achieng",
    service: "Wall Repair",
    date: "2025-06-24",
    time: "10:30 AM",
    note: "Crack near living room door",
  },
  {
    id: 3,
    customer: "Brian Otieno",
    service: "Exterior Painting",
    date: "2025-06-25",
    time: "4:00 PM",
    note: "Gate and fence",
  },
];

export default function ProviderDashboard() {
  const [bookings, ] = useState(dummyBookings);

  const handleAccept = (id) => {
    alert(`Accepted booking ID: ${id}`);
    // In future: call PATCH /api/bookings/:id { status: "confirmed" }
  };

  const handleReject = (id) => {
    alert(`Rejected booking ID: ${id}`);
    // In future: call PATCH /api/bookings/:id { status: "rejected" }
  };

  return (
    <div className="pt-24 px-4 max-w-6xl mx-auto min-h-screen">
      {/*  Welcome */}
      <h1 className="text-2xl sm:text-3xl font-bold text-green-700 mb-6">
        Welcome back, Provider 
      </h1>

      {/* Overview Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
        <div className="bg-green-50 border border-green-200 rounded p-4 text-center">
          <ClipboardList className="mx-auto text-green-600 mb-2" />
          <p className="text-sm text-muted">New Requests</p>
          <p className="text-lg font-semibold text-green-700">{dummyStats.pending}</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded p-4 text-center">
          <CalendarDays className="mx-auto text-green-600 mb-2" />
          <p className="text-sm text-muted">Completed</p>
          <p className="text-lg font-semibold text-green-700">{dummyStats.completed}</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded p-4 text-center">
          <Wallet className="mx-auto text-green-600 mb-2" />
          <p className="text-sm text-muted">Earnings</p>
          <p className="text-lg font-semibold text-green-700">{dummyStats.earnings}</p>
        </div>
        <div className="bg-green-50 border border-green-200 rounded p-4 text-center">
          <Star className="mx-auto text-green-600 mb-2" />
          <p className="text-sm text-muted">Rating</p>
          <p className="text-lg font-semibold text-green-700">{dummyStats.rating}</p>
        </div>
      </div>

      {/* 📦 Booking Requests */}
      <h2 className="text-xl font-semibold text-green-800 mb-4">Booking Requests</h2>

      <div className="space-y-4">
        {bookings.map((b) => (
          <div
            key={b.id}
            className="border border-green-200 bg-green-50 rounded p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
          >
            <div>
              <p className="font-semibold text-green-700">{b.customer}</p>
              <p className="text-sm text-muted">
                Service: {b.service} | {b.date} at {b.time}
              </p>
              <p className="text-xs text-gray-600 mt-1 italic">"{b.note}"</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => handleAccept(b.id)}
                className="flex items-center gap-1 bg-green-600 text-white px-4 py-1.5 rounded hover:bg-green-700 transition text-sm"
              >
                <CheckCircle size={16} /> Accept
              </button>
              <button
                onClick={() => handleReject(b.id)}
                className="flex items-center gap-1 bg-red-600 text-white px-4 py-1.5 rounded hover:bg-red-700 transition text-sm"
              >
                <XCircle size={16} /> Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
