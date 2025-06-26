import React from 'react';
import { useParams } from "react-router-dom";
import { MapPin, Phone, BadgeCheck } from "lucide-react";

// ✅ Dummy list of providers (same as in CategoryPage)
const dummyProviders = [
  {
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
  },
  {
    id: 2,
    name: "Sarah Wanjiku",
    location: "Nakuru",
    rating: 4.6,
    image: "https://i.pravatar.cc/150?img=45",
    bio: "Experienced electrician focused on household wiring and smart lighting.",
    services: [
      { name: "House Wiring", price: "KES 10,000" },
      { name: "Light Installations", price: "KES 1,200 per unit" },
    ],
    contact: "+254 799 888999",
  },
  {
    id: 3,
    name: "John Otieno",
    location: "Mombasa",
    rating: 4.9,
    image: "https://i.pravatar.cc/150?img=22",
    bio: "Professional cleaner offering both commercial and residential deep cleaning.",
    services: [
      { name: "Deep Cleaning", price: "KES 2,000" },
      { name: "Office Cleaning", price: "KES 4,500" },
    ],
    contact: "+254 701 111222",
  },
];

const ProviderProfile = () => {
  const { id } = useParams(); // 🔑 Get provider ID from URL
  const provider = dummyProviders.find(p => p.id === parseInt(id)); // 🧠 Find the right one

  if (!provider) {
    return (
      <div className="pt-24 px-4 text-center text-red-500">
        <p>Provider not found.</p>
      </div>
    );
  }

  return (
    <div className="pt-24 px-4 max-w-4xl mx-auto min-h-screen">
      {/* 🧠 Header Section */}
      <div className="flex flex-col sm:flex-row items-center gap-6 mb-10">
        <img
          src={provider.image}
          alt={provider.name}
          className="w-32 h-32 rounded-full object-cover border-4 border-green-500"
        />

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

      {/* 💰 Services */}
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

      {/* 📞 Contact */}
      <div className="bg-green-100 p-6 rounded text-center">
        <p className="text-green-800 font-medium mb-2">Ready to book or ask a question?</p>
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
