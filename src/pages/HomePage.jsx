import React from 'react';
import PageContent from '../layout/PageContent';
import ExampleSlider from '../components/ExampleSlider';

const HomePage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative">
        {/* Content Overlay */}
        <div className="absolute inset-0 z-10 flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-xl space-y-6">
              <h2 className="text-[#23856D] text-base font-bold">
                SUMMER 2024
              </h2>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
                NEW COLLECTION
              </h1>
              <p className="text-gray-600 text-xl">
                We know how large objects will act, but things on a small scale just do not act that way.
              </p>
              <div>
                <a 
                  href="/shop"
                  className="inline-block bg-[#23856D] text-white px-10 py-4 font-bold hover:bg-[#1a6351] transition-colors"
                >
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Slider */}
        <ExampleSlider />
      </section>
      
      <PageContent>
        <div className="space-y-12">
          <section>
            <h1 className="text-4xl font-bold mb-4 text-gray-900">Welcome to Our Store</h1>
            <p className="text-gray-700 mb-8">Discover our amazing collection of products.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Featured Products</h2>
            <ExampleSlider />
          </section>
        </div>
      </PageContent>
    </div>
  );
};

export default HomePage;
