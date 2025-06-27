// src/components/admin/Sidebar.jsx
import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  BadgeCheck,
  ClipboardList,
  BarChart2,
  Star,
  ShieldAlert,
  Folder,
  MapPin,
  Wallet,
  Settings,
} from "lucide-react";

const navItems = [
  { name: "Dashboard", icon: LayoutDashboard },
  { name: "Users", icon: Users },
  { name: "Providers", icon: BadgeCheck },
  { name: "Bookings", icon: ClipboardList },

  { name: "Services", icon: BadgeCheck },
  { name: "Service Providers", icon: BadgeCheck },
  { name: "Customers", icon: Users },
  { name: "Transactions", icon: Wallet },
  { name: "KYC", icon: ShieldAlert },
  { name: "Reviews", icon: Star },
  { name: "Bookings", icon: ClipboardList },
  { name: "Reviews", icon: Star },
  { name: "Disputes", icon: ShieldAlert },
  { name: "Categories", icon: Folder },
  { name: "Locations", icon: MapPin },
  { name: "Payments", icon: Wallet },
  { name: "Analytics", icon: BarChart2 },
  { name: "Settings", icon: Settings },
];

export default function Sidebar({ currentTab, setCurrentTab }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile Toggle */}
      <div className="sm:hidden p-4 flex justify-between items-center bg-white shadow">
        <h1 className="text-lg font-bold text-brand">Admin</h1>
        <button onClick={() => setOpen(!open)}>
        
        </button>
      </div>

      <div
        className={`${
          open ? "block" : "hidden"
        } sm:block bg-white sm:w-64 w-full h-screen sm:h-auto shadow sm:relative fixed top-0 left-0 z-50`}
      >
        <div className="p-6">
          <h2 className="text-xl font-bold text-brand mb-6">Admin Panel</h2>
          <nav className="space-y-3">
            {navItems.map(({ name, icon: Icon }) => (
              <button
                key={name}
                onClick={() => {
                  setCurrentTab(name);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2 rounded ${
                  currentTab === name
                    ? "bg-brand text-white"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
              >
                <Icon className="w-5 h-5" />
                {name}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </>
  );
}
