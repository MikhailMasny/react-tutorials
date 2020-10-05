import * as constants from "../../constants/reducerTypes";

const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case constants.COUNTER_INCREMENT:
      return state + action.payload;
    case constants.COUNTER_DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

export default counterReducer;
