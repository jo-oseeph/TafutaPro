import React from 'react'
import {
  Search,
  CalendarClock,
  Wallet,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    title: "Find Your Service",
    icon: Search,
    desc: "Browse top-rated providers by category and location.",
  },
  {
    title: "Book Instantly",
    icon: CalendarClock,
    desc: "Choose your date and time, no delays or paperwork.",
  },
  {
    title: "Pay Securely",
    icon: Wallet,
    desc: "Use M-Pesa and enjoy fast, protected transactions.",
  },
  {
    title: "Get It Done",
    icon: CheckCircle,
    desc: "Sit back and relax, your task is handled professionally.",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-heading mb-10">
          How TafutaPro Works
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <div className="flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-full bg-brand/10 text-brand">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-heading mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks