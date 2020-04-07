import axios from 'axios';

export default function (token) {

  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-token'];
  }

  // console.log('setAuth::set', axios.defaults.headers.common['x-auth-token'])
}