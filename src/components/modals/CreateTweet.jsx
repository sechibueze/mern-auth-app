import React, { Component, Fragment } from 'react';
import NavLink from '../NavLink';
class CreateTweetModal extends Component {
  state = {
    isOpen: false,
    title: '',
    content: ''
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
    const { title, content } = this.state;
    const tweet = { title, content };
    console.log('New Tweet', tweet);

    this.toggleCreateTweetModal();

  }
  render() {
    const { isOpen, title, content } = this.state;
    const modalShowClass = isOpen === true ? 'show' : '';
    return (
      <Fragment>
        <NavLink label='Create' onClick={this.toggleCreateTweetModal} />
        <div className={`modal ${modalShowClass}`}>

          <div className='modal-content'>
            <div className='modal-header'>
              <span onClick={this.closeModal} className='close-modal clearfix'> &times; </span>
              <h1 className='modal-title'> Create Tweet </h1>
            </div>
            <div className='modal-body'>
              <form onSubmit={this.handleCreateTweet}>
                <div className='form-group'>
                  <label htmlFor='lastname'>Title</label>
                  <input
                    onChange={this.handleChange}
                    value={title}
                    type='text'
                    name='title'
                    className='form-control'
                    required placeholder='Enter your tweet title'
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor='tweet'>Add new Tweet</label>
                  <textarea onChange={this.handleChange} value={content} cols='10' rows='8' name='content' className='form-control' required placeholder='Start typing...or paste your tweet' />
                </div>


                <div className='form-group'>
                  <button type='submit' className='form-control btn btn-primary'> Create Tweet </button>
                </div>
              </form>
            </div>
            <div className='modal-footer'>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CreateTweetModal;