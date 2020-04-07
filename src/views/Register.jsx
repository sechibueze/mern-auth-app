import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import { registerUser } from '../actions/authActions';
class Register extends Component {
  static propTypes = {
    registerUser: PropTypes.func.isRequired,
    error: PropTypes.object
  }
  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    error: {
      id: '', message: ''
    }
  }
  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  handleRegister = e => {
    e.preventDefault();
    const { firstname, lastname, email, password } = this.state;
    // Create new user data
    const user = { firstname, lastname, email, password };
    this.props.registerUser(user, this.props.history);
  }

  componentDidMount() {
    console.log('Register::ComponentDidMount')
  }
  componentDidUpdate(nextProps, nextState) {
    const { error } = this.props;
    if (nextProps.error !== error) {
      // New error has appeared
      if (error.id === 'REGISTER_FAIL') {
        this.setState({
          error
        })
      }
    }
  }
  render() {
    const { firstname, lastname, email, password, error: { message } } = this.state;
    return (
      <div className='container-fluid'>
        <Navbar />
        <div className='row'>
          <form className='col-md-6' onSubmit={this.handleRegister}>
            <h1> Register </h1>
            {message && <div className='alert alert-warning'>{message}</div>}
            <div className='form-group'>
              <label htmlFor='firstname'>Firstname</label>
              <input type='text' value={firstname} name='firstname' onChange={this.handleChange} className='form-control' required />
            </div>

            <div className='form-group'>
              <label htmlFor='lastname'>Lastname</label>
              <input type='text' value={lastname} name='lastname' onChange={this.handleChange} className='form-control' required />
            </div>

            <div className='form-group'>
              <label htmlFor='email'>Email</label>
              <input type='email' value={email} name='email' onChange={this.handleChange} className='form-control' required />
            </div>

            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input type='password' value={password} name='password' onChange={this.handleChange} className='form-control' required />
            </div>

            <div className='form-group'>
              <button type='submit' className='btn btn-primary btn-lg mb-2'>Register</button>
            </div>
            <small className='mb-3'>Already has an account? <Link to='/login'>login</Link></small>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    error: state.auth.error
  };
}
export default connect(mapStateToProps, { registerUser })(Register);