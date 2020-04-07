import React from 'react';
import { connect } from 'react-redux';
import { Route, withRouter, Redirect } from 'react-router-dom';
import { loadUser } from '../actions/authActions';
// Requirement 3.
// It checks if the user is authenticated, if they are,
// it renders the "component" prop. If not, it redirects
// the user to /login.
// console.log('load user', loadUser())

const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  console.log('PrivateRoute::auth', auth);

  // rest.loadUser();
  return (

    < Route {...rest} render={(props) => (
      // auth.isAuthenticated === 
      true
        ? <Component {...props} {...rest} />
        : <Redirect to='/login' />
    )} />
  )
}

// export default PrivateRoute;

function mapStateToprops(state) {
  return {
    auth: state.auth
  }
}
export default connect(mapStateToprops, { loadUser })(withRouter(PrivateRoute));