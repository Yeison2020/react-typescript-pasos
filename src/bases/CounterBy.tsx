import { useState } from "react";

// Defining the type of my props
interface Props {
  // This ? means initialValue Optional
  initialValue?: number;
}
const CounterBy = ({ initialValue = 5 }: Props) => {
  const [counterState, setCounterState] = useState({
    counter: initialValue,
    click: 0,
  });

  // Here I need to defined everything
  const handleCounter = (value: number) => {
    setCounterState((prev) => ({
      counter: prev.counter + value,
      click: prev.click + 1,
    }));
  };
  return (
    <>
      <h1>Counter By: {counterState.counter}</h1>
      <h2>Click {counterState.click}</h2>
      <button onClick={() => handleCounter(1)}>+1 Click me</button>
      <br />
      <br />
      <button onClick={() => handleCounter(5)}>+5 Click me</button>
    </>
  );
};

export default CounterBy;
