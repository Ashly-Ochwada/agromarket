import { Link } from 'react-router';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <span className="font-bold text-xl text-white">AgroMarket</span>
            </div>
            <p className="text-sm text-gray-400">
              Connecting farmers, merchants, and customers in a unified digital agricultural marketplace.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="hover:text-green-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-green-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-green-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/marketplace" className="hover:text-green-500 transition-colors">
                  Marketplace
                </Link>
              </li>
              <li>
                <Link to="/categories" className="hover:text-green-500 transition-colors">
                  Categories
                </Link>
              </li>
              <li>
                <Link to="/farmers" className="hover:text-green-500 transition-colors">
                  Farmers
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-green-500 transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* For Users */}
          <div>
            <h3 className="text-white font-semibold mb-4">For Users</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/role-selection" className="hover:text-green-500 transition-colors">
                  Become a Farmer
                </Link>
              </li>
              <li>
                <Link to="/role-selection" className="hover:text-green-500 transition-colors">
                  Merchant Registration
                </Link>
              </li>
              <li>
                <Link to="/role-selection" className="hover:text-green-500 transition-colors">
                  Customer Sign Up
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-green-500" />
                <span>support@agromarket.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-green-500" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-green-500" />
                <span>123 Farm Road, CA 94016</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400 text-center">
          <p>&copy; {new Date().getFullYear()} AgroMarket. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
