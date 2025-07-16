import React from "react";
import { formatMoney } from "../../utils/Money";
import dayjs from "dayjs";
import axios from "axios";
import DeliveryOptions from "./DeliveryOptions";

export function OrderSummary({ deliveryOptions, cart, loadCart }) {

  const handleDeleteCartItem = async (productId) => {
    try {
      await axios.delete(`/api/cart-items/${productId}`);
      await loadCart();
    } catch (error) {
      console.error("Error deleting cart item:", error);
    }
  };

  const handleUpdateQuantity = async (productId, newQuantity) => {
    try {
      if (newQuantity < 1) {
        // If quantity is less than 1, remove the item
        await handleDeleteCartItem(productId);
      } else {
        await axios.put(`/api/cart-items/${productId}`, {
          quantity: newQuantity,
        });
        await loadCart();
      }
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  return (
    <div className="order-summary">
      {deliveryOptions.length > 0 &&
        cart.map((cartItem) => {
          const selectedDeliveryOption = deliveryOptions.find(
            (deliveryOption) => deliveryOption.id === cartItem.deliveryOptionId
          );

          return (
            <div key={cartItem.productId} className="cart-item-container">
              <div className="delivery-date">
                Delivery date:{" "}
                {dayjs(selectedDeliveryOption.estimatedDeliveryTimeMs).format(
                  "dddd, MMMM D"
                )}
              </div>

              <div className="cart-item-details-grid">
                <img
                  className="product-image"
                  src={cartItem.product.image}
                  alt={cartItem.product.name}
                />
                <div className="cart-item-details">
                  <div className="product-name">{cartItem.product.name}</div>
                  <div className="product-price">
                    ${formatMoney(cartItem.product.priceCents)}
                  </div>
                  <div className="product-quantity">
                    <span>
                      Quantity:{" "}
                      <span className="quantity-label">{cartItem.quantity}</span>
                    </span>
                    <span
                      className="update-quantity-link link-primary"
                      onClick={() =>
                        handleUpdateQuantity(cartItem.productId, cartItem.quantity + 1)
                      }
                    >
                      Add +1
                    </span>
                    <span
                      className="delete-quantity-link link-primary"
                      onClick={() =>
                        handleUpdateQuantity(cartItem.productId, cartItem.quantity - 1)
                      }
                    >
                      Remove -1
                    </span>
                  </div>
                </div>

                <DeliveryOptions
                  deliveryOptions={deliveryOptions}
                  cartItem={cartItem}
                  loadCart={loadCart}
                />
              </div>
            </div>
          );
        })}
    </div>
  );
}
