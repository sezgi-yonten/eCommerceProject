import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ErrorBoundary from './components/ErrorBoundary';

// Layout Components
import Header from './layout/Header.jsx';
import Footer from './layout/Footer.jsx';

// Pages
import HomePage from './pages/HomePage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import PricingPage from './pages/PricingPage.jsx';
import ProductPage from './pages/ProductPage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import ShopPage from './pages/ShopPage.jsx';

function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <Router>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/contact" component={ContactPage} />
                <Route path="/pricing" component={PricingPage} />
                <Route path="/product/:id" component={ProductPage} />
                <Route path="/signup" component={SignupPage} />
                <Route path="/shop" component={ShopPage} />
                <Route path="*">
                  <div className="container mx-auto px-4 py-8">
                    <h1 className="text-3xl font-bold">Page Not Found</h1>
                  </div>
                </Route>
              </Switch>
            </main>
            <Footer />
          </div>
          <ToastContainer position="bottom-right" />
        </Router>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
