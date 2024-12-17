import React from 'react';
import PropTypes from 'prop-types';
import { Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, title, category, price, discountedPrice, image }) => {
  return (
    <div className="group bg-white overflow-hidden">
      <Link to={`/product/${id}`} className="block relative">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
          
          {/* Quick Actions */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors">
              <Heart className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-3 bg-white rounded-full hover:bg-gray-100 transition-colors">
              <ShoppingCart className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
      </Link>
      
      <div className="p-4 text-center">
        <Link to={`/product/${id}`} className="block">
          <h3 className="text-base font-bold text-gray-800 mb-1 hover:text-[#23856D] transition-colors">
            {title}
          </h3>
        </Link>
        <div className="text-sm text-gray-500 mb-2">{category}</div>
        <div className="flex items-center justify-center space-x-2">
          <span className="text-gray-500 line-through">{price}</span>
          <span className="text-[#23856D] font-bold">{discountedPrice}</span>
        </div>
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
};

export default ProductCard;