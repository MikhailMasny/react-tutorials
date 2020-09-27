import React, { useState, useEffect, useRef } from "react";

function RefChildComponent(props) {
  const focus = () => props.inputElement.current.focus();

  useEffect(() => {
    console.log(props);
  }, []);

  return (
    <div>
      <button onClick={focus}>Focus input</button>
    </div>
  );
}

export default RefChildComponent;
