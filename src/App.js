import React from "react";
import "./styles.css";
import Cart from "./Cart";
import "./cart.css";
import ToggleButton from "./ToggleButton";

const items = [
  { id: 1, name: "Taco Seasoning", price: 2.25, qty: 3 },
  { id: 2, name: "Apple", price: 1.25, qty: 10 }
];
// main
export default function App() {
  return (
    <div className="App">
      <Cart initialItems={items} />
      <h1>I am making a cart!</h1>
      <h2>Here is a toogle button</h2>
      <ToggleButton />
    </div>
  );
}
