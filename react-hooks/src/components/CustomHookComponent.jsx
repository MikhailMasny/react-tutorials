import React from "react";
import { useLogger } from "../hooks/logger.hook";
import { useInput } from "../hooks/input.hook";

function CustomHookComponent() {
  const input = useInput("");

  useLogger(input.value);

  return (
    <div>
      <h1>{input.value}</h1>
      {/* <input type="text" value={input.value} onChange={input.onChange} /> */}
      <input type="text" {...input.bind} />
      <button onClick={input.clear}>Clear</button>
    </div>
  );
}

export default CustomHookComponent;
