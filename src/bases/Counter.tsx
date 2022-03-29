import React from "react";
import { useState } from "react";

const Counter = ({ initialValue = 0 }) => {
  const [counter, setCounter] = useState(initialValue);
  const handleCounter = () => {
    setCounter((prev) => prev + 1);
  };
  return (
    <>
      <h1>Counter {counter}</h1>
      <button onClick={handleCounter}>+1 Click me</button>
    </>
  );
};

export default Counter;
