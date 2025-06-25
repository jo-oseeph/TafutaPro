import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { MapPin, Phone, BadgeCheck } from "lucide-react";

// 🧪 Dummy provider data for demonstration
const dummyProvider = {
  id: 1,
  name: "James Mwangi",
  location: "Nairobi",
  rating: 4.8,
  image: "https://i.pravatar.cc/150?img=12",
  bio: "I am a professional painter with over 8 years of experience in residential and commercial projects. I deliver quality work with attention to detail.",
  services: [
    { name: "Interior Painting", price: "KES 3,000 per room" },
    { name: "Exterior Painting", price: "KES 5,000 per side" },
    { name: "Wall Repair", price: "KES 1,500" },
  ],
  contact: "+254 712 345678",
};

const ProviderProfile = () => {
  const { id } = useParams();

  // ✅ Simulate future API usage and fix "unused" ESLint warning
  useEffect(() => {
    console.log("Loaded Provider ID:", id);
    // In future: fetch(`/api/providers/${id}`);
  }, [id]);

  const provider = dummyProvider;

  return (
    <div className="pt-24 px-4 max-w-4xl mx-auto min-h-screen">
      {/* 🧠 Header Section */}
      <div className="flex flex-col sm:flex-row items-center gap-6 mb-10">
        {/* 👤 Profile Image */}
        <img
          src={provider.image}
          alt={provider.name}
          className="w-32 h-32 rounded-full object-cover border-4 border-green-500"
        />

        {/* 📝 Basic Info */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold text-green-700 flex items-center gap-2">
            {provider.name}
            <BadgeCheck className="text-green-500 w-5 h-5" />
          </h1>
          <p className="text-sm text-muted flex items-center gap-1 mt-1">
            <MapPin className="w-4 h-4 text-green-400" /> {provider.location}
          </p>
          <p className="text-yellow-500 mt-1">
            ★ {provider.rating.toFixed(1)} / 5.0
          </p>
        </div>
      </div>

      {/* 📝 Bio Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-green-700 mb-2">About</h2>
        <p className="text-muted leading-relaxed">{provider.bio}</p>
      </div>

      {/* 💰 Services List */}
      <div className="mb-10">
        <h2 className="text-xl font-semibold text-green-700 mb-3">Services Offered</h2>
        <ul className="space-y-3">
          {provider.services.map((service, idx) => (
            <li
              key={idx}
              className="border border-green-100 bg-green-50 p-4 rounded flex justify-between items-center"
            >
              <span className="text-green-800 font-medium">{service.name}</span>
              <span className="text-green-600 text-sm">{service.price}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* 📞 Call to Action */}
      <div className="bg-green-100 p-6 rounded text-center">
        <p className="text-green-800 font-medium mb-2">
          Ready to book or ask a question?
        </p>
        <a
          href={`tel:${provider.contact}`}
          className="inline-flex items-center justify-center gap-2 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
        >
          <Phone className="w-4 h-4" />
          Call {provider.contact}
        </a>
      </div>
    </div>
  );
};

export default ProviderProfile;
