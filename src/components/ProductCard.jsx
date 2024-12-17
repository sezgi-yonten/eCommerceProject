import React from 'react';
import PropTypes from 'prop-types';

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="relative pb-[100%]">
        <img 
          src={product.image} 
          alt={product.title || product.name} 
          className="absolute top-0 left-0 w-full h-full object-contain rounded-md"
        />
      </div>
      <h2 className="text-lg font-semibold mt-4 line-clamp-2">{product.title || product.name}</h2>
      <p className="text-gray-700 mt-2 font-bold">${product.price}</p>
      <button 
        className="w-full bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 transition-colors duration-300"
        onClick={() => alert('Added to cart!')}
      >
        Add to Cart
      </button>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;