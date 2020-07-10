import React from "react";
import "./styles.css";
import Cart from "./Cart";
import "./cart.css";

const items = [
  { id: 1, name: "Taco Seasoning", price: 2.25, qty: 3 },
  { id: 1, name: "Apple", price: 1.25, qty: 10 }
];

export default function App() {
  return (
    <div className="App">
      <Cart initialItems={items} />

      <h1>I am making a cart!</h1>
    </div>
  );
}
