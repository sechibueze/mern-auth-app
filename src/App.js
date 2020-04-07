import React, { Component } from 'react';
import { Provider } from 'react-redux';
import AppRoutes from './AppRoutes';
import store from './store';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


class App extends Component {

  state = {}

  render() {
    return (
      <Provider store={store}>
        <AppRoutes />
      </Provider>
    );
  }
}

export default App;
