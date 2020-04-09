import { SET_ERROR, CLEAR_ERROR } from "../actions/types";
const initialState = {
  error: {}
};
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        error: action.error
      };

    case CLEAR_ERROR:
      return {
        ...state,
        error: {}
      };
    default:
      return state;
  }
}