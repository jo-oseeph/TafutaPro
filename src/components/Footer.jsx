import { Facebook, Twitter, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <div className="relative">
      {/* Main content area to show the footer in context */}
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Your Website Content</h1>
          <p className="text-gray-600 mb-8">This is where your main content would go.</p>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <p className="text-gray-700">Scroll down to see the beautiful wave footer!</p>
          </div>
        </div>
      </div>

      {/* Footer with integrated wave background */}
      <footer className="relative">
        {/* Wave SVG Background */}
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          {/* Gradient Definition */}
          <defs>
            <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#1f2937" />
              <stop offset="100%" stopColor="#111827" />
            </linearGradient>
          </defs>
          
          {/* Wave Path */}
          <path
            d="M0,96L60,112C120,128,240,160,360,160C480,160,600,128,720,128C840,128,960,160,1080,176C1200,192,1320,192,1380,192L1440,192V400H1380C1320,400,1200,400,1080,400C960,400,840,400,720,400C600,400,480,400,360,400C240,400,120,400,60,400H0V96Z"
            fill="url(#waveGradient)"
          />
          
          {/* Footer Content Overlay */}
          <foreignObject x="0" y="140" width="1440" height="260">
            <div className="w-full h-full px-4 sm:px-6 lg:px-8 py-8">
              <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid gap-8 sm:gap-12 md:gap-16 lg:gap-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-8">
                  {/* Brand Section */}
                  <div className="text-white text-left">
                    <h3 className="text-xl font-bold mb-4 text-blue-300">TafutaPro</h3>
                    <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
                      Connecting skilled service providers with customers. Simple, fast, and trusted.
                    </p>
                  </div>

                  {/* Quick Links */}
                  <div className="text-white text-left">
                    <h4 className="text-base font-semibold mb-4 text-gray-100">Quick Links</h4>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <a href="/" className="text-gray-300 hover:text-blue-300 hover:pl-2 transition-all duration-300 inline-block relative group">
                          <span className="relative z-10">Home</span>
                          <span className="absolute left-0 top-0 w-0 h-full bg-blue-300 bg-opacity-10 group-hover:w-full transition-all duration-300 -z-10"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/services" className="text-gray-300 hover:text-blue-300 hover:pl-2 transition-all duration-300 inline-block relative group">
                          <span className="relative z-10">Browse Services</span>
                          <span className="absolute left-0 top-0 w-0 h-full bg-blue-300 bg-opacity-10 group-hover:w-full transition-all duration-300 -z-10"></span>
                        </a>
                      </li>
                      <li>
                        <a href="/about" className="text-gray-300 hover:text-blue-300 hover:pl-2 transition-all duration-300 inline-block relative group">
                          <span className="relative z-10">About Us</span>
                          <span className="absolute left-0 top-0 w-0 h-full bg-blue-300 bg-opacity-10 group-hover:w-full transition-all duration-300 -z-10"></span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Support */}
                  <div className="text-white text-left">
                    <h4 className="text-base font-semibold mb-4 text-gray-100">Support</h4>
                    <ul className="space-y-3 text-sm">
                      <li>
                        <a href="/contact" className="text-gray-300 hover:text-blue-300 hover:pl-2 transition-all duration-300 inline-block relative group">
                          <span className="relative z-10">Contact Us</span>
                          <span className="absolute left-0 top-0 w-0 h-full bg-blue-300 bg-opacity-10 group-hover:w-full transition-all duration-300 -z-10"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#c" className="text-gray-300 hover:text-blue-300 hover:pl-2 transition-all duration-300 inline-block relative group">
                          <span className="relative z-10">Help Center</span>
                          <span className="absolute left-0 top-0 w-0 h-full bg-blue-300 bg-opacity-10 group-hover:w-full transition-all duration-300 -z-10"></span>
                        </a>
                      </li>
                      <li>
                        <a href="#c" className="text-gray-300 hover:text-blue-300 hover:pl-2 transition-all duration-300 inline-block relative group">
                          <span className="relative z-10">Privacy Policy</span>
                          <span className="absolute left-0 top-0 w-0 h-full bg-blue-300 bg-opacity-10 group-hover:w-full transition-all duration-300 -z-10"></span>
                        </a>
                      </li>
                    </ul>
                  </div>

                  {/* Social Media */}
                  <div className="text-white text-left">
                    <h4 className="text-base font-semibold mb-4 text-gray-100">Follow Us</h4>
                    <div className="flex gap-4">
                      <a 
                        href="#c" 
                        className="text-gray-300 hover:text-blue-300 transition-all duration-300 hover:scale-110 hover:rotate-6 hover:shadow-lg p-2 rounded-full hover:bg-blue-300 hover:bg-opacity-10"
                        aria-label="Facebook"
                      >
                        <Facebook className="w-5 h-5" />
                      </a>
                      <a 
                        href="#c" 
                        className="text-gray-300 hover:text-blue-300 transition-all duration-300 hover:scale-110 hover:-rotate-6 hover:shadow-lg p-2 rounded-full hover:bg-blue-300 hover:bg-opacity-10"
                        aria-label="Twitter"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                      <a 
                        href="#c" 
                        className="text-gray-300 hover:text-blue-300 transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-lg p-2 rounded-full hover:bg-blue-300 hover:bg-opacity-10"
                        aria-label="Instagram"
                      >
                        <Instagram className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Copyright */}
                <div className="pt-6 border-t border-gray-600 text-center sm:text-left">
                  <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} TafutaPro. All rights reserved.
                  </p>
                </div>
              </div>
            </div>
          </foreignObject>
        </svg>
      </footer>
    </div>
  );
}