import React, { Component } from 'react';
import { connect } from 'react-redux';

class Admin extends Component {
  state = {}
  render() {
    console.log('Admin', this.props)
    return (<h1> Admin </h1>);
  }
}
function mapStateToProps(state) {
  return {
    data: state
  }
}
export default connect(mapStateToProps)(Admin);