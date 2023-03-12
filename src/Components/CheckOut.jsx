import React from "react";
import "../Styling/Checkout.css";
import Header from "./Header";
import SubTotal from "./SubTotal";

export default function CheckOut() {
  return (
    <div>
      <Header />
      <div className="checkout">
        <div className="checkoutLeft">
          <div>
            <h2>Your shopping basket is empty</h2>
            <p>You have no items in your basket</p>
          </div>
        </div>
        <div className="checkoutRight">
            <SubTotal/>
        </div>
      </div>
    </div>
  );
}
