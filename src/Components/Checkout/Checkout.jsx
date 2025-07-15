import React from "react";
import axios from "axios";

import { useState, useEffect } from "react";
import "./checkout-header.css";
import "./checkout.css";
import { Link } from "react-router";

import { OrderSummary } from "./OrderSummary";
import { PaymentSummary } from "./PaymentSummary";


function Checkout({ cart }) {
  const [deliveryOptions, setDeliveryOptions] = useState([]);
  const[paymentSummary,setPaymentSummary]=useState(null)
  useEffect(() => {
    axios.get("/api/delivery-options?expand=estimatedDeliveryTime")
      .then((response) => {
        setDeliveryOptions(response.data);
      });

       axios.get("/api/payment-summary")
        .then((response)=>{
          console.log(response)
          setPaymentSummary(response.data)
          console.log(paymentSummary)
        })
  }, []);
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to="/">
              <img className="logo" src="/images/logo.png" alt="logo" />
              <img
                className="mobile-logo"
                src="/images/mobile-logo.png"
                alt="mobile logo"
              />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <a className="return-to-home-link" href="/">
              2
            </a>
            )
          </div>

          <div className="checkout-header-right-section">
            <img src="/images/icons/checkout-lock-icon.png" alt="lock icon" />
          </div>
        </div>
      </div>

      <div className="page-title">Review your order</div>

      <div className="checkout-grid">
       <OrderSummary deliveryOptions={deliveryOptions} cart={cart}/>
       
        <PaymentSummary paymentSummary={paymentSummary}/>
        
       
      </div>
    </div>
  );
}

export default Checkout;
