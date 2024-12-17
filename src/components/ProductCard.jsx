import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ title, category, price, discountedPrice, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-[300px] object-cover"
        />
      </div>
      <div className="p-4">
        <div className="text-sm text-gray-500 mb-2">{category}</div>
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="flex items-center space-x-2">
          <span className="text-gray-500 line-through">{price}</span>
          <span className="text-blue-600 font-semibold">{discountedPrice}</span>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  discountedPrice: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default ProductCard;