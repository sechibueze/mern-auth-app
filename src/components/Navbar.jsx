import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/authActions';
import NavLink from './NavLink';
import LoginModal from './modals/LoginModal';
import RegisterModal from './modals/RegisterModal';
import CreateTweet from './modals/CreateTweet';
class Navbar extends Component {
  state = {
    open: false,
    isModalOpen: false
  }
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    logout: PropTypes.func.isRequired
  }

  toggleNavlinks = _ => {
    this.setState({ open: !this.state.open })
  }

  render() {
    const { open } = this.state;
    const navlinksState = open ? 'navlinks-toggle' : '';
    const { isAuthenticated } = this.props;
    console.log('Navbar::isAuth', isAuthenticated)
    const authLinks = (
      <Fragment>
        <CreateTweet />
        <NavLink label='Logout' onClick={this.props.logout} />
      </Fragment>
    );
    const guestLinks = (
      <Fragment>
        <RegisterModal />
        <LoginModal />
      </Fragment>
    );
    const navLinks = isAuthenticated ? authLinks : guestLinks;
    return (
      <nav id='navbar' className={navlinksState}>
        <div className='container clearfix '>
          <div className='logo'>ThinkOut</div>
          <span className='menu-icon-toggler' onClick={this.toggleNavlinks}>MENU</span>
          <div className='navlinks'>
            <NavLink label='Tweets' />
            {navLinks}
          </div>
        </div>
      </nav>
    );
  }
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});
export default connect(mapStateToProps, { logout })(Navbar);