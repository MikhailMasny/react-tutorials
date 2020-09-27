import React, { useState } from "react";

function computeInitialCounter() {
  console.log("Some calc..");
  return Math.trunc(Math.random() * 20);
}

function StateExample() {
  const [counter, setCounter] = useState(0);
  // const [counter, setCounter] = useState(() => {
  //   return computeInitialCounter();
  // });

  const simpleObject = {
    title: "Counter",
    date: Date.now(),
  };

  const [obj, setObj] = useState(simpleObject);

  function increment() {
    setCounter(counter + 1);
    // setCounter(prev => prev + 1);
  }

  function decrement() {
    setCounter(counter - 1);
  }

  function updateTitle() {
    setObj((prev) => {
      return {
        ...prev,
        title: "New Counter",
      };
    });
  }

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Sub</button>
      <button onClick={updateTitle}>Change title</button>
      <pre>{JSON.stringify(obj, null, 2)}</pre>
    </div>
  );
}

export default StateExample;
