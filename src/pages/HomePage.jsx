import React from 'react';
import ProductCard from "../components/ProductCard";
import ExampleSlider from "../components/ExampleSlider";

const HomePage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Welcome to Our Store</h1>
      <section className="mb-12">
        <ExampleSlider />
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* ProductCard components will be populated by ExampleSlider */}
        </div>
      </section>
    </div>
  );
};

export default HomePage;
