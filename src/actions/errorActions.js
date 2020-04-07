import { CLEAR_ERROR, SET_ERROR } from './types';
export const setError = (type = SET_ERROR, error) => {
  console.log('err', {
    type,
    error
  })
  return {
    type,
    error
  };
}

export const clearError = () => {
  return {
    type: CLEAR_ERROR
  };
}