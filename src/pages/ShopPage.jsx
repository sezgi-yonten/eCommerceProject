import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../store/thunks/productThunks';
import ProductCard from '../components/ProductCard';
import { ChevronDown, Filter, Grid2X2, List, X } from 'lucide-react';

const ShopPage = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const categories = [
    'all',
    ...new Set(products?.map((product) => product.category) || []),
  ];

  const filteredProducts = products?.filter((product) => {
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange.min && product.price <= priceRange.max;
    return matchesCategory && matchesPrice;
  });

  const sortedProducts = [...(filteredProducts || [])].sort((a, b) => {
    switch (sortBy) {
      case 'price-asc':
        return a.price - b.price;
      case 'price-desc':
        return b.price - a.price;
      default:
        return 0;
    }
  });

  const FilterSidebar = ({ isMobile = false }) => (
    <div className={`space-y-6 ${isMobile ? 'p-4' : ''}`}>
      {/* Categories */}
      <div>
        <h3 className="text-lg font-semibold mb-4 flex items-center">
          <Filter className="mr-2" />
          Categories
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                if (isMobile) setIsFilterOpen(false);
              }}
              className={`block w-full text-left px-4 py-2 rounded ${
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
          <div className="flex items-center space-x-4">
            <input
              type="number"
              value={priceRange.min}
              onChange={(e) =>
                setPriceRange({ ...priceRange, min: Number(e.target.value) })
              }
              className="w-24 px-2 py-1 border border-gray-300 rounded"
              placeholder="Min"
            />
            <span>-</span>
            <input
              type="number"
              value={priceRange.max}
              onChange={(e) =>
                setPriceRange({ ...priceRange, max: Number(e.target.value) })
              }
              className="w-24 px-2 py-1 border border-gray-300 rounded"
              placeholder="Max"
            />
          </div>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-[#23856D]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Shop Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <div className="flex items-center justify-between w-full md:w-auto">
          <h1 className="text-2xl font-bold text-[#252B42]">Shop</h1>
          <button
            onClick={() => setIsFilterOpen(true)}
            className="md:hidden p-2 rounded bg-gray-100"
          >
            <Filter size={20} />
          </button>
        </div>
        <div className="flex items-center justify-between w-full md:w-auto gap-4">
          <span className="text-sm text-gray-500 hidden md:inline">
            Showing {sortedProducts?.length || 0} results
          </span>
          <div className="flex items-center gap-2">
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white border border-gray-300 rounded-md py-2 pl-3 pr-8 text-sm focus:outline-none focus:ring-[#23856D] focus:border-[#23856D]"
              >
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
              <ChevronDown className="absolute right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded ${
                viewMode === 'grid' ? 'bg-[#23856D] text-white' : 'bg-gray-100'
              }`}
            >
              <Grid2X2 size={20} />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded ${
                viewMode === 'list' ? 'bg-[#23856D] text-white' : 'bg-gray-100'
              }`}
            >
              <List size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Filter Modal */}
      {isFilterOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
          <div className="absolute right-0 top-0 h-full w-80 bg-white">
            <div className="flex justify-between items-center p-4 border-b">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button
                onClick={() => setIsFilterOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <X size={20} />
              </button>
            </div>
            <div className="overflow-y-auto h-[calc(100%-64px)]">
              <FilterSidebar isMobile={true} />
            </div>
          </div>
        </div>
      )}

      {/* Shop Content */}
      <div className="flex flex-col md:flex-row gap-8">
        {/* Desktop Sidebar */}
        <div className="hidden md:block w-64 flex-shrink-0">
          <FilterSidebar />
        </div>

        {/* Product Grid/List */}
        <div className="flex-1">
          <div
            className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'
                : 'space-y-6'
            }
          >
            {sortedProducts?.map((product) => (
              <ProductCard
                key={product.id}
                id={product.id}
                title={product.title}
                category={product.category}
                price={`$${product.price}`}
                discountedPrice={`$${(product.price * 0.8).toFixed(2)}`}
                image={product.image}
                viewMode={viewMode}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopPage;
