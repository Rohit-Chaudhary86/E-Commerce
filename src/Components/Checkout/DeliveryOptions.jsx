import React from "react";
import { formatMoney } from "../../utils/Money";
import dayjs from "dayjs";

export default function DeliveryOptions({ deliveryOptions ,cartItem}) {
  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>
      {deliveryOptions.map((deliveryOption) => {
        //here
        let price = "Free Shipping";
        if (deliveryOption.priceCents > 0) {
          price = `${formatMoney(deliveryOption.priceCents)}-Shipping`;
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
                {dayjs(deliveryOption.estimatedDeliveryTimeMs).format(
                  "dddd, MMMM, D"
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
