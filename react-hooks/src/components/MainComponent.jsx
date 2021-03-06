import React from "react";
import { useAlert } from "../contexts/alert.context";

function MainComponent() {
  const { show } = useAlert();

  // console.log(show);

  return (
    <div>
      <h1>Context component</h1>
      <button onClick={() => show("MyTestText")}>Show alert</button>
    </div>
  );
}

export default MainComponent;
