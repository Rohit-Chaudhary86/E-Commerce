import React from "react";

import "./checkout-header.css";
import "./checkout.css";
import { Link } from "react-router";

function Checkout() {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to="/">
              <img className="logo" src="/images/logo.png" alt="logo" />
              <img className="mobile-logo" src="/images/mobile-logo.png" alt="mobile logo" />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (<a className="return-to-home-link" href="/">3 items</a>)
          </div>

          <div className="checkout-header-right-section">
            <img src="/images/icons/checkout-lock-icon.png" alt="lock icon" />
          </div>
        </div>
      </div>

      <div className="page-title">Review your order</div>

      <div className="checkout-grid">
        <div className="order-summary">
          
          <div className="cart-item-container">
            <div className="delivery-date">Delivery date: Tuesday, June 21</div>

            <div className="cart-item-details-grid">
              <img className="product-image" src="/images/products/athletic-cotton-socks-6-pairs.jpg" alt="socks" />
              <div className="cart-item-details">
                <div className="product-name">Black and Gray Athletic Cotton Socks - 6 Pairs</div>
                <div className="product-price">$10.90</div>
                <div className="product-quantity">
                  <span>Quantity: <span className="quantity-label">2</span></span>
                  <span className="update-quantity-link link-primary">Update</span>
                  <span className="delete-quantity-link link-primary">Delete</span>
                </div>
              </div>

              <div className="delivery-options">
                <div className="delivery-options-title">Choose a delivery option:</div>
                <div className="delivery-option">
                  <input type="radio" checked name="delivery-option-1" className="delivery-option-input" />
                  <div>
                    <div className="delivery-option-date">Tuesday, June 21</div>
                    <div className="delivery-option-price">FREE Shipping</div>
                  </div>
                </div>
                <div className="delivery-option">
                  <input type="radio" name="delivery-option-1" className="delivery-option-input" />
                  <div>
                    <div className="delivery-option-date">Wednesday, June 15</div>
                    <div className="delivery-option-price">$4.99 - Shipping</div>
                  </div>
                </div>
                <div className="delivery-option">
                  <input type="radio" name="delivery-option-1" className="delivery-option-input" />
                  <div>
                    <div className="delivery-option-date">Monday, June 13</div>
                    <div className="delivery-option-price">$9.99 - Shipping</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cart Item 2 */}
          <div className="cart-item-container">
            <div className="delivery-date">Delivery date: Wednesday, June 15</div>

            <div className="cart-item-details-grid">
              <img className="product-image" src="/images/products/intermediate-composite-basketball.jpg" alt="basketball" />
              <div className="cart-item-details">
                <div className="product-name">Intermediate Size Basketball</div>
                <div className="product-price">$20.95</div>
                <div className="product-quantity">
                  <span>Quantity: <span className="quantity-label">1</span></span>
                  <span className="update-quantity-link link-primary">Update</span>
                  <span className="delete-quantity-link link-primary">Delete</span>
                </div>
              </div>

              <div className="delivery-options">
                <div className="delivery-options-title">Choose a delivery option:</div>
                <div className="delivery-option">
                  <input type="radio" name="delivery-option-2" className="delivery-option-input" />
                  <div>
                    <div className="delivery-option-date">Tuesday, June 21</div>
                    <div className="delivery-option-price">FREE Shipping</div>
                  </div>
                </div>
                <div className="delivery-option">
                  <input type="radio" checked name="delivery-option-2" className="delivery-option-input" />
                  <div>
                    <div className="delivery-option-date">Wednesday, June 15</div>
                    <div className="delivery-option-price">$4.99 - Shipping</div>
                  </div>
                </div>
                <div className="delivery-option">
                  <input type="radio" name="delivery-option-2" className="delivery-option-input" />
                  <div>
                    <div className="delivery-option-date">Monday, June 13</div>
                    <div className="delivery-option-price">$9.99 - Shipping</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="payment-summary">
          <div className="payment-summary-title">Payment Summary</div>
          <div className="payment-summary-row">
            <div>Items (3):</div>
            <div className="payment-summary-money">$42.75</div>
          </div>
          <div className="payment-summary-row">
            <div>Shipping & handling:</div>
            <div className="payment-summary-money">$4.99</div>
          </div>
          <div className="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div className="payment-summary-money">$47.74</div>
          </div>
          <div className="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div className="payment-summary-money">$4.77</div>
          </div>
          <div className="payment-summary-row total-row">
            <div>Order total:</div>
            <div className="payment-summary-money">$52.51</div>
          </div>
          <button className="place-order-button button-primary">Place your order</button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
