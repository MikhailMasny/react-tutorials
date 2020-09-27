import React from "react";
import { useAlert } from "../contexts/alert.context";

function AlertComponent() {
  const alert = useAlert();

  // console.log(alert);

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

export default AlertComponent;
