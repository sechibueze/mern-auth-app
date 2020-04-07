import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser } from '../actions/authActions';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
class Login extends Component {
  static propTypes = {
    loginUser: PropTypes.func.isRequired,
    error: PropTypes.object
  }
  state = {
    email: '',
    password: '',
    error: {
      id: '',
      message: ''
    }
  }
  componentDidUpdate(nextProps) {
    const { error } = this.props;
    if (nextProps.error !== error) {
      if (error.id === 'LOGIN_FAIL') {
        this.setState({ error });
      }
    }
  }

  handleChange = ({ target }) => {
    const { name, value } = target;

    this.setState({ [name]: value });
  }

  handleLogin = e => {
    e.preventDefault();
    const { email, password } = this.state;
    // User login
    const userLogin = { email, password };
    this.props.loginUser(userLogin, this.props.history);
  }
  render() {
    const { email, password, error: { message } } = this.state;

    return (
      <div className='df'>
        <Navbar />
        <div className='conatainer'>
          <div className='row'>
            <form className='col-md-6' onSubmit={this.handleLogin}>
              <h1> Login </h1>
              {message && <div className='alert alert-warning'>{message}</div>}
              <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input type='email' value={email} name='email' onChange={this.handleChange} className='form-control' required />
              </div>

              <div className='form-group'>
                <label htmlFor='password'>Password</label>
                <input type='password' value={password} name='password' onChange={this.handleChange} className='form-control' required />
              </div>

              <div className='form-group'>
                <button type='submit' className='btn btn-primary btn-lg mb-2'>Login</button>
              </div>
              <small className='mb-3'>New user ? <Link to='/register'>Register</Link></small>
            </form>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    error: state.auth.error
  };
}
export default connect(mapStateToProps, { loginUser })(Login);