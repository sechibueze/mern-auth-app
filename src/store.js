import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import rootReducer from './reducers/rootReducer';
const middleware = [thunk];

function saveStateToLocalStorage(state) {
  try {
    const serializeState = JSON.stringify(state);
    localStorage.setItem('state', serializeState);
  } catch (e) {
    console.log('Error::could not save to storage', e);
  }
}

function loadStateFromLocalStorage() {
  try {
    const state = localStorage.getItem('state');
    if (state === null) return undefined;
    return JSON.parse(state)

  } catch (e) {
    console.log('Error::could not load from storage', e);
    return undefined;
  }
}
const initialState = loadStateFromLocalStorage();
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()) ||
    compose
  ));

// subscribe to store for changes
store.subscribe(() => saveStateToLocalStorage({
  error: "My initial state data"
}));
export default store;