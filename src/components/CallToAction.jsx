import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section className="bg-gradient-to-r from-brand to-indigo-600 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <h2 className="text-2xl text-white font-semibold text-center md:text-left">
          Ready to get your task done easily and fast?
        </h2>

        <div className="flex gap-4 flex-wrap justify-center">
          <Link to="/signup">
            <button className="bg-white text-brand px-6 py-2 rounded font-medium hover:bg-gray-100 transition">
              Browse Services
            </button>
          </Link>

          <Link to="/signup">
            <button className="bg-heading text-white px-6 py-2 rounded font-medium hover:bg-white hover:text-heading transition">
              Become a Provider
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
