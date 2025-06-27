// src/components/admin/OverviewCards.jsx
import { Users, BadgeCheck, ClipboardList, Wallet } from "lucide-react";

const cards = [
  { title: "Total Users", value: 1400, icon: Users, color: "bg-blue-100", text: "text-blue-700" },
  { title: "Service Providers", value: 320, icon: BadgeCheck, color: "bg-green-100", text: "text-green-700" },
  { title: "Bookings", value: 820, icon: ClipboardList, color: "bg-yellow-100", text: "text-yellow-700" },
  { title: "Revenue", value: "KES 320K", icon: Wallet, color: "bg-purple-100", text: "text-purple-700" },
];

export default function OverviewCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
      {cards.map(({ title, value, icon: Icon, color, text }) => (
        <div key={title} className={`p-4 rounded shadow-sm ${color}`}>
          <div className="flex items-center justify-between mb-2">
            <h3 className={`text-sm font-medium ${text}`}>{title}</h3>
            <Icon className={`w-5 h-5 ${text}`} />
          </div>
          <p className={`text-xl font-bold ${text}`}>{value}</p>
        </div>
      ))}
    </div>
  );
}
