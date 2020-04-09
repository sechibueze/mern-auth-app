import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TweetFeed from './components/TweetFeed';

import store from './store';

import './App.css';
import { loadUser } from './actions/authActions';


class App extends Component {
  state = {}
  componentDidMount() {
    console.log('%c App::componentDidMount', 'color:green', store.getState().auth.isLoading)
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <Navbar />
        <TweetFeed />
        <Footer />
      </Provider>
    );
  }
}

export default App;
