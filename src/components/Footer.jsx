import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

class Footer extends Component {
  state = {}
  render() {
    return (
      <footer id='footer'>
        <div className='container'>
          <small className='copyright'> Copyright &copy; 2020 - <a href='https/sechibueze.github.io/'>Samuel Chibueze</a></small>
        </div>
      </footer>
    );
  }
}

export default Footer;