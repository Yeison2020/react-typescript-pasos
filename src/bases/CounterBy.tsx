import { useState } from "react";

// Defining the type of my props
interface Props {
  // This ? means initialValue Optional
  initialValue?: number;
}
const CounterBy = ({ initialValue = 5 }: Props) => {
  const [counter, setCounter] = useState({
    counter: initialValue,
    click: 0,
  });
  const handleCounter = (value: number) => {
    setCounter((prev) => ({
      counter: prev.counter + value,
      click: prev.click + 1,
    }));
  };
  return (
    <>
      <h1>Counter By: {counter.counter}</h1>
      <h2>Click {counter.click}</h2>
      <button onClick={() => handleCounter(1)}>+1 Click me</button>
      <hr />
      <button onClick={() => handleCounter(5)}>+5 Click me</button>
    </>
  );
};

export default CounterBy;
