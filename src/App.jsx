import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';

function App() {
  const [showProductList, setShowProductList] = useState(false);

  const handleGetStarted = () => {
    setShowProductList(true);
  };

  return (
    <>
      {!showProductList ? (
        <div className="landing-page">
          <h1>Welcome to Paradise Nursery</h1>
          <p>Where Green Meets Serenity</p>
          <button onClick={handleGetStarted} className="get-started-btn">
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </>
  );
}

export default App;
