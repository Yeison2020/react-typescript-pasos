import React from "react";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const handleCounter = () => {
    setCounter((curr) => curr + 1);
  };
  return (
    <>
      <h1>Counter {counter}</h1>
      <button onClick={handleCounter}>+1 Click me</button>
    </>
  );
};

export default Counter;
