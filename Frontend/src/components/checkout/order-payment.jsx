import React, { useState } from "react";
import useCartInfo from "../../hooks/use-cart-info";

const OrderPayment = () => {
  const { total } = useCartInfo();
  const handleClick = async () => {
    event.preventDefault();
    try {
      const url = "/api/transactions";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: total }),
      });
      const final = await response.json();

      const newTab = window.open();
      newTab.location.href = `${final?.success?.url}`;
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="order-payment">
      <h4 className="title">Payment</h4>
      <div className="payment-method">
        <div className="form-group">
          <div className="edu-form-check">
            <input type="radio" id="pay-bank" name="payment" />
            <label htmlFor="pay-bank">Direct Bank Transfer</label>
          </div>
          <p>
            Please send a check to Store Name, Store Street, Store Town, Store
            State / County, Store Postcode.
          </p>
        </div>

        <div className="form-group">
          <div className="edu-form-check">
            <input type="radio" id="pay-pal" name="payment" />
            <label htmlFor="pay-pal">PayPal</label>
            <a href="#">What is Paypal?</a>
          </div>
        </div>
      </div>

      <div>
        <button className="edu-btn order-place" onClick={handleClick}>
          Place your order
        </button>
      </div>
    </div>
  );
};

export default OrderPayment;
