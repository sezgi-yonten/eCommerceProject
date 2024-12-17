import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './layout/Header';
import Footer from './layout/Footer';
import HomePage from './pages/HomePage';

const App = () => {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route 
                path="/" 
                element={
                  <ErrorBoundary>
                    <HomePage />
                  </ErrorBoundary>
                } 
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
};

export default App;
