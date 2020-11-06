import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';

function CallbackChildComponent(props) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log("render");
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

CallbackChildComponent.propTypes = {
  getItems: PropTypes.func
};

export default CallbackChildComponent;
