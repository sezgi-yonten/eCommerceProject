import React from "react";
import ExampleSlider from "./components/ExampleSlider";
import Header from "./layout/Header";
import Footer from "./layout/Footer";


const App = () => {
  return (
    <div className="App">
      <Header />  
      <ExampleSlider />
      <Footer />
    </div>
  );
};

export default App;
