import React from "react";
import { useAlert } from "../contexts/AlertContext";

function ContextAlertComponent() {
  const alert = useAlert();
  console.log(alert);
  if (!alert.visible) {
    return null;
  }
  return (
    <div>
      <p>Alert text: {alert.text}</p>
      <button onClick={alert.hidden}>Close</button>
    </div>
  );
}

export default ContextAlertComponent;
