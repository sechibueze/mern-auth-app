import * as Types from '../actions/types';
const initialState = {
  token: null, //localStorage.getItem('token'),
  isAuthenticated: localStorage.getItem('isAuthenticated') || undefined,
  isLoading: false,
  user: {},
  error: {}
};

export default function (state = initialState, action) {

  switch (action.type) {
    case Types.REGISTER_SUCCESS:
    case Types.LOGIN_SUCCESS:
    case Types.SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: true,
        user: action.user
      };

    case Types.REGISTER_FAIL:
    case Types.LOGIN_FAIL:
    case Types.AUTH_ERROR:
      localStorage.removeItem('token');
      return {
        ...state,
        error: action.error
      };

    case Types.LOGOUT:
      localStorage.removeItem('token');
      return {
        token: null,
        isAuthenticated: false,
        user: {}

      };
    case Types.IS_LOADING:
      return {
        ...state,
        isLoading: true
      }
    case Types.HAS_LOADED:
      return {
        ...state,
        isLoading: false
      }
    default:
      return state;
  }
}