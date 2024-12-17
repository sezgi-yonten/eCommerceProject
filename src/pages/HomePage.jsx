import React from 'react';
import PageContent from '../layout/PageContent';
import ExampleSlider from '../components/ExampleSlider';

const HomePage = () => {
  return (
    <PageContent>
      <div className="space-y-12">
        <section>
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
          <p className="text-gray-600 mb-8">Discover our amazing collection of products.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
          <ExampleSlider />
        </section>
      </div>
    </PageContent>
  );
};

export default HomePage;
