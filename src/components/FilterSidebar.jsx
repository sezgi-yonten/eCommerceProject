import React from 'react';
import PropTypes from 'prop-types';

const FilterSidebar = ({ categories, selectedCategory, setSelectedCategory, priceRange, setPriceRange, isMobile }) => {
  return (
    <div className={`${isMobile ? 'p-4' : ''}`}>
      {/* Categories */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`block w-full text-left px-3 py-2 rounded ${
                selectedCategory === category
                  ? 'bg-[#23856D] text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Price Range</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">Min Price ($)</label>
            <input
              type="number"
              value={priceRange.min}
              onChange={(e) =>
                setPriceRange((prev) => ({
                  ...prev,
                  min: Math.max(0, parseInt(e.target.value) || 0),
                }))
              }
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#23856D]"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">Max Price ($)</label>
            <input
              type="number"
              value={priceRange.max}
              onChange={(e) =>
                setPriceRange((prev) => ({
                  ...prev,
                  max: Math.max(prev.min, parseInt(e.target.value) || prev.min),
                }))
              }
              className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#23856D]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

FilterSidebar.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  setSelectedCategory: PropTypes.func.isRequired,
  priceRange: PropTypes.shape({
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
  }).isRequired,
  setPriceRange: PropTypes.func.isRequired,
  isMobile: PropTypes.bool,
};

FilterSidebar.defaultProps = {
  isMobile: false,
};

export default FilterSidebar;
