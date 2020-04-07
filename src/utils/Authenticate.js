import React from 'react';
import { connect } from 'react-redux';
import { loadUser } from '../actions/authActions';
import PropTypes from 'prop-types';
export default function (ProtectedComponent) {
  class Authenticate extends React.Component {
    static propTypes = {
      isAuthenticated: PropTypes.bool.isRequired
    }
    state = {}
    componentDidMount() {
      console.log('Authenticate::componentDidMount::props', this.props.isAuthenticated);
      this.props.loadUser();
      if (!this.props.isAuthenticated) {
        this.props.history.push('/login')
      }

    }
    componentDidUpdate(nextProp) {
      console.log('Authenticate::componentDidUpdate::this.props', this.props);
      console.log('Authenticate::componentDidUpdate::nextProps', nextProp);
    }
    render() {
      return (<ProtectedComponent {...this.props} />);
      // return (
      //   <div> {this.props.children} </div>
      // );
    }
  }

  function mapStateToProps(state) {
    return {
      isAuthenticated: state.auth.isAuthenticated
    }
  }

  return connect(mapStateToProps, { loadUser })(Authenticate);
}