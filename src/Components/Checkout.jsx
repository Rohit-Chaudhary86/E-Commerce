import React from "react";
import axios from "axios";
import dayjs from "dayjs"
import { useState, useEffect } from "react";
import "./checkout-header.css";
import "./checkout.css";
import { Link } from "react-router";
import { formatMoney } from "../utils/Money";

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
        <div className="order-summary">
          {deliveryOptions.length > 0 && cart.map((cartItem) => {
            const selectedDeliveryOption=deliveryOptions.find((deliveryOption)=>{
                return deliveryOption.id === cartItem.deliveryOptionId
            })
            return (
              <div key={cartItem.productId} className="cart-item-container">
                <div className="delivery-date">
                  Delivery date: {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM, D')}
                </div>

                <div className="cart-item-details-grid">
                  <img
                    className="product-image"
                    src={cartItem.product.image}
                    alt="socks"
                  />
                  <div className="cart-item-details">
                    <div className="product-name">{cartItem.product.name}</div>
                    <div className="product-price">
                      ${formatMoney(cartItem.product.priceCents)}
                    </div>
                    <div className="product-quantity">
                      <span>
                        Quantity:{" "}
                        <span className="quantity-label">
                          {cartItem.quantity}
                        </span>
                      </span>
                      <span className="update-quantity-link link-primary">
                        Update
                      </span>
                      <span className="delete-quantity-link link-primary">
                        Delete
                      </span>
                    </div>
                  </div>

                  <div className="delivery-options">
                    <div className="delivery-options-title">
                      Choose a delivery option:
                    </div>
                    {deliveryOptions.map((deliveryOption) => {   //here
                      let price="Free Shipping";
                      if(deliveryOption.priceCents>0){
                        price=`${formatMoney(deliveryOption.priceCents)}-Shipping`
                      }
                      return (
                        <div key={deliveryOption.id} className="delivery-option">
                          <input
                            type="radio"
                            checked={deliveryOption.id === cartItem.deliveryOptionId}
                            name={`"delivery-option-${cartItem.productId}`}
                            className="delivery-option-input"
                          />
                          <div>
                            <div className="delivery-option-date">
                             {dayjs(deliveryOption.estimatedDeliveryTimeMs).format('dddd, MMMM, D')}
                            </div>
                            <div className="delivery-option-price">
                              {price}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
       
        <div className="payment-summary">
          <div className="payment-summary-title">Payment Summary</div>
          {paymentSummary &&(
            <>
          <div className="payment-summary-row">
            <div>Items ({paymentSummary.totalItems}):</div>
            <div className="payment-summary-money">{formatMoney(paymentSummary.productCostCents) }</div>
          </div>
          <div className="payment-summary-row">
            <div>Shipping & handling:</div>
            <div className="payment-summary-money">{formatMoney(paymentSummary.shippingCostCents)}</div>
          </div>
          <div className="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div className="payment-summary-money">{formatMoney(paymentSummary.totalCostBeforeTaxCents)}</div>
          </div>
          <div className="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div className="payment-summary-money">{formatMoney(paymentSummary.taxCents)}</div>
          </div>
          <div className="payment-summary-row total-row">
            <div>Order total:</div>
            <div className="payment-summary-money">{formatMoney(paymentSummary.totalCostCents)}</div>
          </div>
          <button className="place-order-button button-primary">
            Place your order
          </button>
          </>
          )}
        </div>
       
      </div>
    </div>
  );
}

export default Checkout;
