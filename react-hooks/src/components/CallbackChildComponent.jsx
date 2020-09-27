import React, { useState, useEffect } from "react";

function CallbackChildComponent(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log('render');
    const newItems = props.getItems();
    setItems(newItems);
  }, [props.getItems]);

  return (
    <ul>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

export default CallbackChildComponent;
