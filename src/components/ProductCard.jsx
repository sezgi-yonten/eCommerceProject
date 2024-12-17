import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Heart, ShoppingCart } from 'lucide-react';

const ProductCard = ({ id, title, category, price, discountedPrice, image, viewMode = 'grid' }) => {
  if (viewMode === 'list') {
    return (
      <div className="flex bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="w-48 h-48 flex-shrink-0">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover rounded-l-lg"
          />
        </div>
        <div className="flex-1 p-6">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-xl font-bold text-[#252B42]">{title}</h3>
              <p className="text-sm text-gray-500 mt-1">{category}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button className="p-2 rounded-full hover:bg-gray-100">
                <Heart size={20} className="text-[#23856D]" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-100">
                <ShoppingCart size={20} className="text-[#23856D]" />
              </button>
            </div>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-[#23856D]">{discountedPrice}</span>
              <span className="text-gray-500 line-through">{price}</span>
            </div>
            <Link
              to={`/product/${id}`}
              className="px-6 py-2 bg-[#23856D] text-white rounded-md hover:bg-[#1a6351] transition-colors duration-300"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative group">
        <img
          src={image}
          alt={title}
          className="w-full h-64 object-cover rounded-t-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex space-x-2">
            <button className="p-2 bg-white rounded-full hover:bg-gray-100">
              <Heart size={20} className="text-[#23856D]" />
            </button>
            <button className="p-2 bg-white rounded-full hover:bg-gray-100">
              <ShoppingCart size={20} className="text-[#23856D]" />
            </button>
          </div>
        </div>
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-bold text-[#252B42]">{title}</h3>
            <p className="text-sm text-gray-500 mt-1">{category}</p>
          </div>
          <div className="flex flex-col items-end">
            <span className="text-lg font-bold text-[#23856D]">{discountedPrice}</span>
            <span className="text-sm text-gray-500 line-through">{price}</span>
          </div>
        </div>
        <Link
          to={`/product/${id}`}
          className="mt-4 block w-full text-center px-6 py-2 bg-[#23856D] text-white rounded-md hover:bg-[#1a6351] transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  discountedPrice: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  viewMode: PropTypes.oneOf(['grid', 'list'])
};

export default ProductCard;