import React, { useState, useMemo, useEffect } from "react";

function complexCompute(num) {
  let i = 0;
  console.log("Run complexCompute");
  while (i < 1000000000) {
    i++;
  }
  return num * 2;
}

function MemoHookComponent() {
  const [number, setNumber] = useState(2);
  const [colored, setColored] = useState(false);

  const computed = useMemo(() => {
    return complexCompute(number);
  }, [number]);

  const styles = useMemo(
    () => ({
      color: colored ? "red" : "black",
    }),
    [colored]
  );

  useEffect(() => {
    console.log("Run useEffect");
  }, [styles]);

  function increment() {
    setNumber((prev) => prev + 1);
  }

  function decrement() {
    setNumber((prev) => prev - 1);
  }

  return (
    <div>
      <h1 style={styles}>Result: {computed}</h1>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Sub</button>
      <button onClick={() => setColored((prev) => !prev)}>Edit</button>
    </div>
  );
}

export default MemoHookComponent;
