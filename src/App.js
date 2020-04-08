import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import TweetFeed from './components/TweetFeed';

import store from './store';

import './App.css';


class App extends Component {
  state = {}
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
