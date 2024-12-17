import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Layout from './layout';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import PricingPage from './pages/PricingPage';
import ProductPage from './pages/ProductPage';
import SignupPage from './pages/SignupPage';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="contact" element={<ContactPage />} />
            <Route path="pricing" element={<PricingPage />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="shop" element={<ShopPage />} />
            <Route path="*" element={
              <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold">Page Not Found</h1>
              </div>
            } />
          </Route>
        </Routes>
        <ToastContainer position="bottom-right" />
      </Router>
    </Provider>
  );
}

export default App;
