import React from "react";
import ReactDOM from "react-dom";
import { Frame, useCycle } from "framer";

import "./styles.css";

function ToggleButton() {
  const [opacity, cycle] = useCycle(0, 1);
  return (
    <div className="App">
      <Frame
        size={40}
        center
        background="white"
        border="4px solid #999"
        onTap={function() {
          cycle();
        }}
      >
        <Frame
          center
          size={40}
          background="transparent"
          animate={{ opacity: opacity }}
          transition={{ duration: 0.2 }}
        >
          ╳
        </Frame>
      </Frame>
    </div>
  );
}

export default ToggleButton;
