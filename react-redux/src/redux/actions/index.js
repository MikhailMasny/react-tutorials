import * as constants from "../../constants/reducerTypes";

export const increment = (number) => {
  return {
    type: constants.COUNTER_INCREMENT,
    payload: number,
  };
};

export const decrement = () => {
  return {
    type: constants.COUNTER_DECREMENT,
  };
};

export const signIn = () => {
  return {
    type: constants.SIGN_IN,
  };
};

