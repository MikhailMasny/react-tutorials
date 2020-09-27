import React from "react";
import { useAlert } from "../contexts/AlertContext";

function ContextAlertComponent(props) {
  const alert = useAlert();
  if (!alert.visible) {
    return null;
  }
  return (
    <div>
      <p>Alert text: {props.text}</p>
      <button onClick={alert.toggle}>Close</button>
    </div>
  );
}

export default ContextAlertComponent;
