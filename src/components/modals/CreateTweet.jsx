import React, { Component, Fragment } from 'react';
import NavLink from '../NavLink';
class CreateTweetModal extends Component {
  state = {
    isOpen: false,
    tweet: ''
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
  toggleCreateTweetModal = _ => {
    this.setState({ isOpen: !this.state.isOpen });
  }
  handleChange = ({ target: { name, value } }) => {

    this.setState({ [name]: value });
  }

  handleCreateTweet = e => {
    e.preventDefault();
    const { tweet } = this.state;

    console.log('New Tweet', { tweet });

    this.toggleCreateTweetModal();

  }
  render() {
    const { isOpen, tweet } = this.state;
    const status = isOpen === true ? 'show' : '';
    return (
      <Fragment>
        <NavLink label='Create' onClick={this.toggleCreateTweetModal} />
        <div className={`modal ${status}`}>

          <div className='modal-content'>
            <div className='modal-header'>
              <span onClick={this.closeModal} className='close-modal clearfix'> &times; </span>
              <h1 className='modal-title'> Create Tweet </h1>
            </div>
            <div className='modal-body'>
              <form onSubmit={this.handleCreateTweet}>
                <div className='form-group'>
                  <label htmlFor='tweet'>Add new Tweet</label>
                  <textarea onChange={this.handleChange} value={tweet} cols='10' rows='8' name='tweet' className='form-control' required placeholder='Start typing...or paste your tweet' />
                </div>
                {/* 
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
                </div> */}

                <div className='form-group'>

                  <button type='submit' className='form-control btn btn-primary'> Create Tweet </button>
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

export default CreateTweetModal;