import React, { useState, useEffect, useRef } from "react";
import RefChildComponent from "./RefChildComponent";

function RefHookComponent() {
  const [value, setValue] = useState(1);
  const renderCount = useRef(1);
  const inputElement = useRef(null);
  const prevValue = useRef("");

  useEffect(() => {
    renderCount.current++;
  });

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return (
    <div>
      <h1>Renders: {renderCount.current}</h1>
      <h1>Prev value: {prevValue.current}</h1>
      <input
        ref={inputElement}
        type="text"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <RefChildComponent inputElement={inputElement} />
    </div>
  );
}

export default RefHookComponent;
