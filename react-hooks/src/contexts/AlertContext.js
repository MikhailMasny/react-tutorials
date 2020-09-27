import React, { useContext, useReducer, createContext } from "react";

const AlertContext = createContext();
// const AlertToggleContext = createContext();

const ALERT_SHOW = 'show';
const ALERT_HIDDEN = 'hidden';

const reducer = (state, action) => {
  switch (action.type) {
    case ALERT_SHOW: return { ...state, visible: true, text: action.text };
    case ALERT_HIDDEN: return { ...state, visible: false };
    default: {
      return state;
    };
  }
}

export const useAlert = () => {
  return useContext(AlertContext);
}

export const AlertProvider = ({ children }) => {
  // const [alert, setAlert] = useState(false);

  const [state, dispatch] = useReducer(reducer, { visible: false, text: "" });

  const show = (text) => dispatch({ type: ALERT_SHOW, text });
  const hidden = () => dispatch({ type: ALERT_HIDDEN });

  return (
    <AlertContext.Provider value={{
      visible: state.visible,
      text: state.text,
      show,
      hidden
    }}>
      { children}
    </AlertContext.Provider>
  )
}
