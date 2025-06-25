import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Loader2, MapPin } from "lucide-react";

// ✅ Dummy locations for filtering
const dummyLocations = ["Nairobi", "Mombasa", "Kisumu", "Nakuru"];

// ✅ Dummy service providers
const dummyProviders = [
  {
    id: 1,
    name: "James Mwangi",
    rating: 4.8,
    location: "Nairobi",
    image: "https://i.pravatar.cc/150?img=32",
  },
  {
    id: 2,
    name: "Sarah Wanjiku",
    rating: 4.6,
    location: "Nakuru",
    image: "https://i.pravatar.cc/150?img=45",
  },
  {
    id: 3,
    name: "John Otieno",
    rating: 4.9,
    location: "Mombasa",
    image: "https://i.pravatar.cc/150?img=22",
  },
];

export default function CategoryPage() {
  const { category } = useParams();
  const navigate = useNavigate(); // ✅ Used for routing to profile

  const [providers, setProviders] = useState([]);
  const [filteredProviders, setFilteredProviders] = useState([]);
  const [location, setLocation] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  // ✅ Simulate API fetch
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setProviders(dummyProviders);
      setFilteredProviders(dummyProviders);
      setLoading(false);
    }, 1000);
  }, [category]);

  // ✅ Filter providers by location and search input
  useEffect(() => {
    let filtered = providers;

    if (location) {
      filtered = filtered.filter((p) => p.location === location);
    }

    if (searchTerm) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProviders(filtered);
  }, [location, searchTerm, providers]);

  return (
    <div className="pt-24 px-4 max-w-6xl mx-auto min-h-screen">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-heading capitalize">
          Explore Top {category}s Near You
        </h1>
        <p className="text-muted mt-2 text-sm sm:text-base">
          Connect with trusted and highly-rated {category}s in your area, fast, affordable and reliable.
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row justify-between gap-4 mb-8">
        {/* Search */}
        <input
          type="text"
          placeholder="Search by provider name..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full sm:w-1/2 border border-gray-300 rounded px-4 py-2 focus:outline-brand"
        />

        {/* Location Filter */}
        <select
          className="w-full sm:w-1/3 border border-gray-300 rounded px-4 py-2 focus:outline-brand"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        >
          <option value="">All Locations</option>
          {dummyLocations.map((loc, idx) => (
            <option key={idx} value={loc}>
              {loc}
            </option>
          ))}
        </select>
      </div>

      {/* Loader or Results */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="animate-spin text-brand w-8 h-8" />
        </div>
      ) : filteredProviders.length === 0 ? (
        <p className="text-center text-muted">No providers found for this category.</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProviders.map((provider) => (
            <div
              key={provider.id}
              className="bg-white shadow-sm border rounded-lg p-4 hover:shadow-md transition"
            >
              {/* Profile info */}
              <div className="flex items-center gap-4">
                <img
                  src={provider.image}
                  alt={provider.name}
                  className="w-14 h-14 rounded-full object-cover border"
                />
                <div>
                  <h3 className="text-lg font-semibold text-heading">{provider.name}</h3>
                  <p className="text-sm text-muted flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-brand" /> {provider.location}
                  </p>
                  <p className="text-sm text-yellow-500 mt-1">
                    ★ {provider.rating.toFixed(1)} / 5
                  </p>
                </div>
              </div>

              {/* ✅ View Profile button navigates to provider page */}
              <button
                onClick={() => navigate(`/provider/${provider.id}`)}
                className="mt-4 w-full bg-brand text-white py-2 rounded hover:bg-heading transition"
              >
                View Profile
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
