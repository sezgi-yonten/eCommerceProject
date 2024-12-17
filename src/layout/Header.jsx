import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-blue-600">
            eStore
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
            <Link to="/products" className="text-gray-600 hover:text-blue-600">Products</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="text-gray-600 hover:text-blue-600">
              <Search size={20} />
            </button>
            <Link to="/cart" className="text-gray-600 hover:text-blue-600">
              <ShoppingCart size={20} />
            </Link>
            <button className="md:hidden text-gray-600 hover:text-blue-600">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;