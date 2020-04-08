import React, { Component } from 'react';
import NavLink from './NavLink';
import LoginModal from './modals/LoginModal';
import RegisterModal from './modals/RegisterModal';
import CreateTweet from './modals/CreateTweet';
class Navbar extends Component {
  state = {
    open: false,
    isModalOpen: false
  }

  toggleNavlinks = _ => {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { open } = this.state;
    const navlinksState = open ? 'navlinks-toggle' : '';
    return (
      <nav id='navbar' className={navlinksState}>
        <div className='container clearfix '>
          <div className='logo'>ThinkOut</div>
          <span className='menu-icon-toggler' onClick={this.toggleNavlinks}>MENU</span>
          <div className='navlinks'>
            <NavLink label='Tweets' />

            <CreateTweet />
            <RegisterModal />
            <LoginModal />
            <NavLink label='Logout' />



          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;