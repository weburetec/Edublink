import React from "react";

const OrderPayment = () => {
  const handleClick = async () => {
    event.preventDefault();
    try {
      //   const requestData = {
      //     amount: 500,
      //     currency: "LKR",
      //   };
      const method = "POST";

      const options = {
        method: method,
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6ImU1ZDhjYTc3LTU4MjgtNDVkNy05MmY2LTZjYTAxODIzNzQ3NiIsImNvbXBhbnlJZCI6IjY0NmVkYWYyMDI5OTNjMDAwODhkMDIwYSIsImlhdCI6MTY4Njc0NzQzNiwiZXhwIjo0ODQyNDIxMDM2fQ.7RzacNZcu2TwCDi8JOvAzIL2SjJ3e5aA7AGalpbVwBw",
          "Access-Control-Allow-Origin": "true",
        },
        body: JSON.stringify(),
      };
      const url = "/api/transactions";

      const response = await fetch(url, options);
      const final = await response.json();

      console.log("final:", final);
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
