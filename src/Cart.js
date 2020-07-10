import React from "react";
import CartItem from "./CartItem";

function Cart({ initialItems }) {
  const grandTotal = initialItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  return (
    <div>
      <h1>Hello Cart!</h1>
      <ul>
        {initialItems.map(item => (
          <div className="Cart-item">
            <CartItem key={item.id} {...item} />
          </div>
        ))}
      </ul>
      <h3>Grand Total : ${grandTotal}</h3>
    </div>
  );
}

export default Cart;
