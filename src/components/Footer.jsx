import { Facebook, Twitter, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-heading text-white pt-20 pb-10">
      
      <div className="max-w-6xl mx-auto px-6 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <h3 className="text-lg font-bold mb-3">TafutaPro</h3>
          <p className="text-sm text-gray-300">
            Connecting skilled service providers with customers. Simple, fast, and trusted.
          </p>
        </div>

        <div>
          <h4 className="text-base font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Browse Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-base font-semibold mb-3">Support</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="#">Help Center</Link></li>
            <li><Link to="#">Privacy Policy</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-base font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4 text-gray-300">
            <a href="#c"><Facebook className="w-5 h-5 hover:text-white" /></a>
            <a href="#c"><Twitter className="w-5 h-5 hover:text-white" /></a>
            <a href="#c"><Instagram className="w-5 h-5 hover:text-white" /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} TafutaPro. All rights reserved.
      </div>
    </footer>
  );
}
