import * as constants from "../../constants/reducerTypes";

const loggedReducer = (state = false, action) => {
  switch (action.type) {
    case constants.SIGN_IN:
      return !state;
    default:
      return state;
  }
};

export default loggedReducer;
