import React from "react";
import Link from "next/link";

const OrderPayment = () => {
  const handleClick = () => {
    console.log("Test");
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
          Place your order <i className="icon-4"></i>
        </button>
      </div>
    </div>
  );
};

export default OrderPayment;
