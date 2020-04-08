import React, { Component } from 'react';

class NavLink extends Component {
  state = {}

  render() {
    const { label } = this.props;
    return (//onClick={this.props.onClick}
      <span className='navlink' > {label} </span>
    );
  }
}

export default NavLink;