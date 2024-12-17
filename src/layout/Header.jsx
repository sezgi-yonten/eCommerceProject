import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu as MenuIcon, User, Heart, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const cartItemCount = 2;
  const favItemCount = 3;

  return (
    <header className="bg-white">
      {/* Top Header */}
      <div className="bg-[#23856D] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center h-12">
            {/* Contact Info */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Phone size={16} />
                <span>(225) 555-0118</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} />
                <span>michelle.rivera@example.com</span>
              </div>
            </div>
            {/* Welcome Message */}
            <p className="text-sm flex-grow md:flex-grow-0 text-center md:text-left">
              Follow Us and get a chance to win 80% off
            </p>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center min-h-[70px]">
            {/* Brand */}
            <Link to="/" className="text-2xl font-bold text-gray-800 mr-8">
              Bandage
            </Link>

            {/* Main Navigation - grows to take available space */}
            <nav className="hidden lg:flex flex-grow items-center">
              <div className="flex space-x-6">
                <Link to="/" className="text-gray-800 hover:text-[#23856D] whitespace-nowrap">Home</Link>
                <Link to="/shop" className="text-gray-800 hover:text-[#23856D] whitespace-nowrap">Shop</Link>
                <Link to="/about" className="text-gray-800 hover:text-[#23856D] whitespace-nowrap">About</Link>
                <Link to="/blog" className="text-gray-800 hover:text-[#23856D] whitespace-nowrap">Blog</Link>
                <Link to="/contact" className="text-gray-800 hover:text-[#23856D] whitespace-nowrap">Contact</Link>
                <Link to="/pages" className="text-gray-800 hover:text-[#23856D] whitespace-nowrap">Pages</Link>
              </div>
            </nav>

            {/* Right Section - fixed width */}
            <div className="flex items-center ml-auto lg:ml-0 space-x-5">
              {/* Login/Register */}
              <Link to="/login" className="hidden md:flex items-center space-x-2 text-[#23856D] whitespace-nowrap">
                <User size={20} />
                <span>Login / Register</span>
              </Link>

              {/* Icons */}
              <div className="flex items-center space-x-4">
                <button className="text-gray-800 hover:text-[#23856D] p-1">
                  <Search size={20} />
                </button>
                <Link to="/cart" className="text-gray-800 hover:text-[#23856D] p-1 relative">
                  <ShoppingCart size={20} />
                  {cartItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#23856D] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {cartItemCount}
                    </span>
                  )}
                </Link>
                <Link to="/favorites" className="text-gray-800 hover:text-[#23856D] p-1 relative">
                  <Heart size={20} />
                  {favItemCount > 0 && (
                    <span className="absolute -top-2 -right-2 bg-[#23856D] text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                      {favItemCount}
                    </span>
                  )}
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden text-gray-800 p-1"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <MenuIcon size={24} />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden border-t py-4">
              <nav className="flex flex-col space-y-4">
                <Link to="/" className="text-gray-800 hover:text-[#23856D] px-2">Home</Link>
                <Link to="/shop" className="text-gray-800 hover:text-[#23856D] px-2">Shop</Link>
                <Link to="/about" className="text-gray-800 hover:text-[#23856D] px-2">About</Link>
                <Link to="/blog" className="text-gray-800 hover:text-[#23856D] px-2">Blog</Link>
                <Link to="/contact" className="text-gray-800 hover:text-[#23856D] px-2">Contact</Link>
                <Link to="/pages" className="text-gray-800 hover:text-[#23856D] px-2">Pages</Link>
                <Link to="/login" className="text-[#23856D] flex items-center space-x-2 px-2">
                  <User size={20} />
                  <span>Login / Register</span>
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;