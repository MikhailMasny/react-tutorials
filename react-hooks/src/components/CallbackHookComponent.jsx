import React, { useState, useCallback } from "react";
import CallbackChildComponent from "./CallbackChildComponent";

function CallbackHookComponent() {
  const [colored, setColored] = useState(false);
  const [count, setCount] = useState(1);

  const styles = {
    color: colored ? "red" : "black",
  };

  const generateItemsFromApi = useCallback(() => {
    if (count > 0) {
      return new Array(count).fill("").map((_, i) => `Element ${i}`);
    }
    return ["Empty"];
  }, [count]);

  function increment() {
    setCount((prev) => prev + 1);
  }

  function decrement() {
    setCount((prev) => prev - 1);
  }

  return (
    <div>
      <h1 style={styles}>Result: {count}</h1>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Sub</button>
      <button onClick={() => setColored((prev) => !prev)}>Edit</button>
      <CallbackChildComponent getItems={generateItemsFromApi} />
    </div>
  );
}

export default CallbackHookComponent;
