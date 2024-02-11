import React, { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick1 = () => {
    setCount(count + 1);
  };
  const handleClick2 = () => {
    setCount(count - 1);
  };

  return (
    <>
      <h1 className="Heading1"> Welcome to my</h1>
      <h2 className="Heading2">Counter App</h2>
      <div className="Display">
        <span className="DisplayInnerContent">{count}</span>
      </div>
      <div className="InputWrapper">
        <button className="LeftButton" onClick={handleClick1}>
          +
        </button>
        <button className="RightButton" onClick={handleClick2}>
          -
        </button>
      </div>
    </>
  );
};

export default Counter;
