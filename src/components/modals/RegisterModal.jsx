import React, { Component, Fragment } from 'react';
import NavLink from '../NavLink';
class RegisterModal extends Component {
  state = {
    isOpen: false,
    firstname: '',
    lastname: '',
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
  toggleRegisterModal = _ => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  handleChange = ({ target: { name, value } }) => {

    this.setState({ [name]: value });
  }

  handleRegister = e => {
    e.preventDefault();
    const { firstname, lastname, email, password } = this.state;
    const user = { firstname, lastname, email, password };
    console.log('Attempt register', user);

    this.toggleRegisterModal();

  }
  render() {
    const { isOpen, firstname, lastname, email, password } = this.state;
    const status = isOpen === true ? 'show' : '';
    return (
      <Fragment>
        <NavLink label='Register' onClick={this.toggleRegisterModal} />
        <div className={`modal ${status}`}>

          <div className='modal-content'>
            <div className='modal-header'>
              <span onClick={this.closeModal} className='close-modal clearfix'> &times; </span>
              <h1 className='modal-title'> Register </h1>
            </div>
            <div className='modal-body'>
              <form onSubmit={this.handleRegister}>
                <div className='form-group'>
                  <label htmlFor='firstname'>Firstname</label>
                  <input onChange={this.handleChange} value={firstname} type='text' name='firstname' className='form-control' required placeholder='Enter your firstname' />
                </div>

                <div className='form-group'>
                  <label htmlFor='lastname'>Lastname</label>
                  <input onChange={this.handleChange} value={lastname} type='text' name='lastname' className='form-control' required placeholder='Enter your lastname' />
                </div>

                <div className='form-group'>
                  <label htmlFor='email'>Email</label>
                  <input onChange={this.handleChange} value={email} type='email' name='email' className='form-control' required placeholder='Enter your email address' />
                </div>

                <div className='form-group'>
                  <label htmlFor='password'>Password</label>
                  <input onChange={this.handleChange} value={password} type='password' name='password' className='form-control' required placeholder='Enter your password' />
                </div>

                <div className='form-group'>

                  <button type='submit' className='form-control btn btn-primary'> Register </button>
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

export default RegisterModal;