import React from "react";
import { formatMoney } from "../../utils/Money";
import dayjs from "dayjs";
import axios from "axios";

export default function DeliveryOptions({ deliveryOptions, cartItem, loadCart }) {
  
  const handleUpdateDeliveryOption = async (deliveryOptionId) => {
    await axios.put(`/api/cart-items/${cartItem.productId}`, {
      deliveryOptionId,
    });
    await loadCart();
  };

  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>
      {deliveryOptions.map((deliveryOption) => {
        const price =
          deliveryOption.priceCents > 0
            ? `${formatMoney(deliveryOption.priceCents)} - Shipping`
            : "Free Shipping";

        return (
          <div key={deliveryOption.id} className="delivery-option">
            <input
              type="radio"
              checked={deliveryOption.id === cartItem.deliveryOptionId}
              onChange={() => handleUpdateDeliveryOption(deliveryOption.id)}
              name={`delivery-option-${cartItem.productId}`}
              className="delivery-option-input"
            />
            <div onClick={() => handleUpdateDeliveryOption(deliveryOption.id)}>
              <div className="delivery-option-date">
                {dayjs(deliveryOption.estimatedDeliveryTimeMs).format(
                  "dddd, MMMM D"
                )}
              </div>
              <div className="delivery-option-price">{price}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
