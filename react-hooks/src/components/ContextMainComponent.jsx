import React from "react";
import { useAlert } from "../contexts/AlertContext";

function ContextMainComponent() {
  const alert = useAlert();
  console.log(alert.toggle);
  return (
    <div>
      <h1>Context component</h1>
      <button onClick={alert.toggle}>Show alert</button>
    </div>
  );
}

export default ContextMainComponent;
