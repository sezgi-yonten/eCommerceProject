import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from '../store/thunks/productThunks.js';
import ExampleSlider from '../components/ExampleSlider';
import ProductCard from '../components/ProductCard';

const HomePage = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector(state => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  // Make sure products is an array before slicing
  const featuredProducts = Array.isArray(products) ? products.slice(0, 8) : [];

  return (
    <div className="bg-white">
      {/* Hero Section with Slider */}
      <ExampleSlider />

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h5 className="text-gray-600 text-base mb-2">Featured Products</h5>
            <h2 className="text-gray-900 text-4xl font-bold mb-4">BESTSELLER PRODUCTS</h2>
            <p className="text-gray-600">Problems trying to resolve the conflict between</p>
          </div>

          {loading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
          ) : error ? (
            <div className="text-red-500 text-center">{error}</div>
          ) : featuredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  category={product.category}
                  price={`$${product.price}`}
                  discountedPrice={`$${(product.price * 0.8).toFixed(2)}`}
                  image={product.image}
                />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500">No products available</div>
          )}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
