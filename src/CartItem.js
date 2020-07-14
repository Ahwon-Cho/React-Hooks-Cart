import React from "react";

function CartItem({ id, name, price, qty, updateQty }) {
  const addOne = () => updateQty(id, qty + 1);
  const substractionOne = () => updateQty(id, qty - 1);

  return (
    <div>
      <div>{name}</div>
      <div>${price}</div>
      <div>
        <button onClick={substractionOne} disabled={qty < 0}>
          -
        </button>
        {qty}
        <button onClick={addOne}>+</button>
      </div>
      <div>Total: {qty * price}</div>
    </div>
  );
}

export default CartItem;
