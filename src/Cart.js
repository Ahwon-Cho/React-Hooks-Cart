import React, { useState } from "react";
import CartItem from "./CartItem";

function Cart({ initialItems }) {
  const [items, setItems] = useState(initialItems);

  const updateQty = (id, newQty) => {
    const newItems = items.map(items => {
      if (item.id === id) {
        return { ...item, qty: newQty };
      }
      return item;
    });
    setItems(newItems);
  };

  const grandTotal = items.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  return (
    <div>
      <h1>Hello Cart!</h1>
      <ul>
        {items.map(item => (
          <div className="Cart-item">
            <CartItem key={item.id} updateQty={updateQty} {...item} />
          </div>
        ))}
      </ul>
      <h3>Grand Total : ${grandTotal}</h3>
    </div>
  );
}

export default Cart;
