import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import { setError, clearError } from './errorActions';
import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SET_CURRENT_USER,
  AUTH_ERROR,
  LOGOUT,
  IS_LOADING,
  HAS_LOADED
} from './types';

export const registerUser = (user) => dispatch => {
  axios.post('/signup', user)
    .then(res => {
      const { data: { token, user } } = res;

      // set token in localStorage
      localStorage.setItem('token', token);

      // set Auth token in header
      setAuthToken(token);

      dispatch({
        type: REGISTER_SUCCESS,
        user
      });

    })
    .catch(e => {
      const error = {
        id: REGISTER_FAIL,
        message: e.response.data.message || 'Failed to register user'
      };
      dispatch(setError(error));
    })
}

export const loginUser = (userLogin) => dispatch => {
  axios.post('/login', userLogin)
    .then(res => {
      const { data: { token, user } } = res;
      // set Auth token in header
      setAuthToken(token);
      // Set token in localStorage
      localStorage.setItem('token', token);
      dispatch({
        type: LOGIN_SUCCESS,
        user
      });

    })
    .catch(err => {

      const error = {
        id: LOGIN_FAIL,
        message: err.response.data.message || 'Failed to login'
      };
      dispatch(setError(error));
    })
}

// logout

export const logout = () => {
  return {
    type: LOGOUT
  };
}

export const loadUser = () => (dispatch, getState) => {

  dispatch({
    type: IS_LOADING
  });
  // get token from logged in user data via state
  const { token } = getState().auth;//localStorage.getItem('token');
  // Add token to header
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  // Add token to Header
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  axios.get('/users/me', config)
    .then(res => {
      // set the details of the currently logged in user
      const { data: { user } } = res;
      dispatch(setCurrentUser(user));
      // flag off the loading spinner
      dispatch({
        type: HAS_LOADED
      })
    })
    .catch(err => {

      const error = {
        id: AUTH_ERROR,
        message: err.response.data.message || 'Failed to load user'
      };
      dispatch(setError(AUTH_ERROR, error))
    });

}

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    user
  };
}