import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <ErrorBoundary>
      <Router>
        <div className="App">
          <Header />
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
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
};


export default App;
