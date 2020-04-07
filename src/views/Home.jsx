import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

class Home extends Component {
  state = {}
  componentDidMount() {
    console.log('Home::ComponentDidMount')
  }
  componentDidUpdate() {
    console.log('Home::ComponentDidUpdate')
  }
  render() {
    console.log('Home::Render')
    return (
      <div className='container'>
        <Navbar />
        <h1> home </h1>

        <Footer />
      </div>);
  }
}

export default Home;