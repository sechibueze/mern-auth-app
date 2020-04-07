import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  state = {}
  render() {
    return (
      <nav>
        <div className='logo'>MERNstack</div>
        <div className='navlinks'>
          <Link to='/'>Home</Link>
          <Link to='/register'>Register</Link>
          <Link to='/login'>Login</Link>
          <Link to='/account'>Account</Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;