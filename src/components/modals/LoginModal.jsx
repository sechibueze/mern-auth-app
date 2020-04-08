import React, { Component, Fragment } from 'react';
import NavLink from '../NavLink';
class LoginModal extends Component {
  state = {
    isOpen: false,
    email: '',
    password: ''
  }
  componentDidUpdate(prevProps) {

    // close modal if its open
    // if (this.state.open) {
    //   this.toggleModal();
    // }
  }
  closeModal = _ => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  toggleLoginModal = _ => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  handleChange = ({ target: { name, value } }) => {

    this.setState({ [name]: value });
  }

  handleLogin = e => {
    e.preventDefault();
    const { email, password } = this.state;
    const login = { email, password };
    console.log('Attempt login', login);

    this.toggleLoginModal();

  }
  render() {
    const { isOpen, email, password } = this.state;
    const status = isOpen === true ? 'show' : '';
    return (
      <Fragment>
        <NavLink label='Login' onClick={this.toggleLoginModal} />
        <div className={`modal ${status}`}>

          <div className='modal-content'>
            <div className='modal-header'>
              <span onClick={this.closeModal} className='close-modal clearfix'> &times; </span>
              <h1 className='modal-title'> Login </h1>
            </div>
            <div className='modal-body'>
              <form onSubmit={this.handleLogin}>
                <div className='form-group'>
                  <label htmlFor='email'>Email</label>
                  <input onChange={this.handleChange} value={email} type='email' name='email' className='form-control' required placeholder='Enter your email address' />
                </div>

                <div className='form-group'>
                  <label htmlFor='password'>Password</label>
                  <input onChange={this.handleChange} value={password} type='password' name='password' className='form-control' required placeholder='Enter your password' />
                </div>

                <div className='form-group'>

                  <button type='submit' className='form-control btn btn-primary'> Login </button>
                </div>
              </form>
            </div>
            <div className='modal-footer'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolore!
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default LoginModal;