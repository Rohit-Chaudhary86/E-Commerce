import React from 'react';
import { useNavigate } from 'react-router';
import './OrderComplete.css'
export default function OrderPlaced() {
  const navigate = useNavigate();

  const homeNavigate = () => {
    navigate('/');
  };

  return (
    <div className="order-placed-page">
      <div className="order-placed-card">
        <h1>✅ Your order has been placed successfully!</h1>
        <p>Thank you for shopping with us.</p>
        <button className="home-button" onClick={homeNavigate}>
          Go to Home
        </button>
      </div>
    </div>
  );
}

