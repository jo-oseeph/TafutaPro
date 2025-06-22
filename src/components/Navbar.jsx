import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-xl font-bold text-brand">
            TafutaPro
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-heading hover:text-brand">Home</Link>
            <Link to="/services" className="text-heading hover:text-brand">Services</Link>
            <Link to="/about" className="text-heading hover:text-brand">About</Link>
            <Link to="/contact" className="text-heading hover:text-brand">Contact</Link>
            <div className="ml-6 flex space-x-3">
              <Link to="/login">
              <button className="text-brand border border-brand px-4 py-1 rounded hover:bg-brand hover:text-white transition">
                Login
              </button>
              </Link>
              <Link to="/signup">
              <button className="bg-brand text-white px-4 py-1 rounded hover:bg-heading transition">
                Sign Up
              </button>
              </Link>
            </div>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X className="h-6 w-6 text-heading" /> : <Menu className="h-6 w-6 text-heading" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-3 shadow-md">
            <Link to="/"  onClick={() => setIsOpen(false)} className="block text-heading hover:text-brand">Home</Link>
            <Link to="/services"  onClick={() => setIsOpen(false)} className="block text-heading hover:text-brand">Services</Link>
            <Link to="/about"  onClick={() => setIsOpen(false)} className="block text-heading hover:text-brand">About</Link>
            <Link to="/contact"  onClick={() => setIsOpen(false)} className="block text-heading hover:text-brand">Contact</Link>
          <div className="pt-2 space-y-2">
            <Link to="/login">
            <button  onClick={() => setIsOpen(false)} className="w-full text-brand border border-brand px-4 py-2 rounded hover:bg-brand hover:text-white transition">
              Login
            </button>
            </Link>
            <Link to="/signup">
            <button  onClick={() => setIsOpen(false)} className="w-full bg-brand text-white px-4 py-2 rounded hover:bg-heading transition">
              Sign Up
            </button>
             </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
