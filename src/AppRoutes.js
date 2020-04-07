import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Home from './views/Home';
import Register from './views/Register';
import Login from './views/Login';
import Account from './views/Account';
import Admin from './views/Admin';
// import Authenticate from './utils/Authenticate';
import PrivateRoute from './utils/PrivateRoute';
import { loadUser } from './actions/authActions';

class AppRoutes extends Component {
  static propTypes = {
    loadUser: PropTypes.func.isRequired
  }
  state = {}
  // componentDidMount() {
  //   // console.log('App::componentDidMountb4', this.props);
  //   this.props.loadUser();
  //   // console.log('App::componentDidMount--after', this.props);
  // }
  // async componentWillReceiveProps(nextProps) {
  //   // console.log('AppRoute::componentWillReceiveProps::nextProps', nextProps)
  //   // console.log('AppRoute::componentWillReceiveProps::thisprops', this.props)
  //   if (nextProps.auth.isAuthenticated !== this.props.auth.isAuthenticated) {
  //     await this.props.loadUser()
  //   }
  // }
  render() {

    if (this.props.auth.isLoading) {
      return (<h1> Loading ...</h1>)
    } else {
      // console.log('auth::appRoutes', this.props.auth.isAuthenticated)

      return (
        <Router>
          <Route exact component={Home} path='/' />
          <Route exact component={Register} path='/register' />
          <Route exact component={Login} path='/login' />
          <Route exact component={Account} path='/account' />
          {/* <PrivateRoute exact path='/admin' component={Admin} /> */}
          {/* <Switch>
            <PrivateRoute exact path='/account' component={Account} />
          </Switch> */}
          {/* <Route exact component={Authenticate(Account)} path='/account' /> */}
          {/* <Route exact component={Authenticate(Admin)} path='/admin' /> */}
        </Router>
      );
    }

  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth
  };
}
export default connect(mapStateToProps, { loadUser })(AppRoutes);