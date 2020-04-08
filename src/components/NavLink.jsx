import React, { Component } from 'react';

class NavLink extends Component {
  state = {}

  render() {
    const { label } = this.props;
    return (//
      <span className='navlink' onClick={this.props.onClick}> {label} </span>
    );
  }
}

export default NavLink;