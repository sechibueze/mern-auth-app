import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadUser, logout } from '../actions/authActions';
import PropTypes from 'prop-types';
class Account extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    loadUser: PropTypes.func.isRequired
  }
  state = { user: '' }
  componentDidMount() {
    if (!this.props.isAuthenticated) {
      this.props.history.push('/login')
    }
  }


  componentDidUpdate(prevProps, state) {
    const { isAuthenticated } = this.props;
    if (prevProps.isAuthenticated !== isAuthenticated) {

      this.props.loadUser()
    }
  }
  logout = e => {
    this.props.logout();
    this.props.history.push('/login');
  }
  render() {

    if (this.props.auth.isLoading) {
      return (<h1> Loading....</h1>)
    } else {

      const { user } = this.props.auth;
      return (<div className='efe'>
        <h1> Accoutn {user.firstname}</h1>
        <Link to='/admin'>Admin </Link>
        <span onClick={this.logout}>Logout</span>
      </div>);
    }

  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth
  }
};

export default connect(mapStateToProps, { loadUser, logout })(Account);