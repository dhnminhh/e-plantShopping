import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import ProductList from './ProductList';
import CartItem from './CartItem';
import './App.css';

// Component giao diện trang chủ
function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <h1>Paradise Nursery</h1>
      <p>Where Green Meets Serenity</p>
      <button onClick={() => navigate('/products')} className="get-started-btn">
        Get Started
      </button>
    </div>
  );
}

// Component chính chứa bộ định tuyến
function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<ProductList />} />
      <Route path="/cart" element={<CartItem />} />
    </Routes>
  );
}

export default App;