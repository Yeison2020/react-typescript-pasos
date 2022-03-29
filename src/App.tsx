import Counter from "./bases/Counter";
import { useState } from "react";

function App() {
  const [initialValue, setInitialValue] = useState(15);
  return (
    <>
      {" "}
      <Counter initialValue={initialValue} />
    </>
  );
}

export default App;
