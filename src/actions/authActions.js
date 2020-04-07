import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import {
  REGISTER_SUCCESS, REGISTER_FAIL, LOGIN_SUCCESS, LOGIN_FAIL,
  SET_CURRENT_USER, AUTH_ERROR, LOGOUT, IS_LOADING, HAS_LOADED
} from './types';
import { setError } from './errorActions';
export const registerUser = (user, history) => dispatch => {
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
      // Redirect to Account
      history.push('/account');
    })
    .catch(e => {

      const { data, data: { message } } = e.response;
      const error = { id: REGISTER_FAIL, message: message || data };
      dispatch(setError(REGISTER_FAIL, error));
    })
}

export const loginUser = (userLogin, history) => dispatch => {
  axios.post('/login', userLogin)
    .then(res => {
      const { data: { token, user } } = res;
      // set Auth token in header
      // setAuthToken(token);
      // Set token in localStorage
      localStorage.setItem('token', token);
      dispatch({
        type: LOGIN_SUCCESS,
        user
      });
      history.push('/account');
    })
    .catch(err => {
      const { data, data: { message } } = err.response;
      const error = { id: LOGIN_FAIL, message: message || data };
      dispatch(setError(LOGIN_FAIL, error));
    })
}

// logout

export const logout = () => {
  return {
    type: LOGOUT
  };
}
export const loadUser = () => async (dispatch, getState) => {
  // console.log('loadUser::authAction', axios.defaults.headers.common['x-auth-token']);
  // console.log('getState', getState())
  // get token from state
  // const { token } = getState().auth;
  dispatch({
    type: IS_LOADING
  })
  const token = localStorage.getItem('token');
  // Add token to header
  const config = {
    headers: {
      "Content-Type": "application/json"
    }
  };
  if (token) {
    config.headers['x-auth-token'] = token;
  }

  // console.log('config with token', config)
  await axios.get('/users/me', config)
    .then(res => {
      const { data: { user } } = res;
      dispatch(setCurrentUser(user));

      dispatch({
        type: HAS_LOADED
      })
    })
    .catch(err => {
      const { data, data: { message } } = err.response;
      const error = { id: 'AUTH_ERROR', message: message || data };
      dispatch(setError(AUTH_ERROR, error))
    });

  // console.log('User loaded')
}

export const setCurrentUser = user => {
  return {
    type: SET_CURRENT_USER,
    user
  };
}