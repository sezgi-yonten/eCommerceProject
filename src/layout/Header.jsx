import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { ShoppingCart, Heart, Search, User } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <nav className="flex flex-col md:flex-row justify-between items-center py-4 gap-4">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-[#252B42]">
              Bandage
            </Link>
          </div>

          {/* Main Navigation */}
          <div className="flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm hover:text-[#23856D] transition-colors ${
                  isActive ? 'text-[#23856D]' : 'text-gray-800'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `text-sm hover:text-[#23856D] transition-colors ${
                  isActive ? 'text-[#23856D]' : 'text-gray-800'
                }`
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-sm hover:text-[#23856D] transition-colors ${
                  isActive ? 'text-[#23856D]' : 'text-gray-800'
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-sm hover:text-[#23856D] transition-colors ${
                  isActive ? 'text-[#23856D]' : 'text-gray-800'
                }`
              }
            >
              Contact
            </NavLink>
          </div>

          {/* User Actions */}
          <div className="flex items-center space-x-4">
            <Link to="/signup" className="flex items-center text-[#23856D]">
              <User className="w-5 h-5 mr-1" />
              <span className="text-sm">Login / Register</span>
            </Link>
            <button className="text-[#23856D]">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-[#23856D] relative">
              <Heart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-[#23856D] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                1
              </span>
            </button>
            <button className="text-[#23856D] relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-[#23856D] text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                1
              </span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;