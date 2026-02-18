import React, { useState } from "react";
import "./counterStyle.css";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 100) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <>
      <div className="counter-container">
        <h1>Counter App</h1>
    
        <div className="count-display">{count}</div>

        <div className="button-group">
          <button
            className="increment"
            onClick={increment}
            disabled={count === 100}
          >
            ➕ Increment
          </button>

          <button
            className="decrement"
            onClick={decrement}
            disabled={count === 0}
          >
            ➖ Decrement
          </button>

          <button className="reset" onClick={reset}>
            🔄 Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default Counter;
