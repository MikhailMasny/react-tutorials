import React, { useEffect } from "react";
import PropTypes from 'prop-types';

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

RefChildComponent.propTypes = {
  inputElement: PropTypes.object
};

export default RefChildComponent;
