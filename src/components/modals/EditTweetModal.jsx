import React, { Component, Fragment } from 'react';
import NavLink from '../NavLink';
class EditTweetModal extends Component {
  state = {
    isOpen: false,
    title: '',
    content: ''
  }
  componentDidMount() {
    const { title, content } = this.props.tweet;
    this.setState({
      title,
      content
    });
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
  toggleEditTweetModal = _ => {

    this.setState({ isOpen: !this.state.isOpen });
  }
  handleChange = ({ target: { name, value } }) => {

    this.setState({
      [name]: value
    });
  }

  handleEditTweet = e => {
    e.preventDefault();
    const { title, content } = this.state;

    console.log('Updated Tweet', { title, content });

    this.toggleEditTweetModal();

  }
  render() {

    const { isOpen, title, content } = this.state;

    const status = isOpen === true ? 'show' : '';
    return (
      <Fragment>
        <NavLink label='Edit' onClick={this.toggleEditTweetModal} />
        <div className={`modal ${status}`}>

          <div className='modal-content'>
            <div className='modal-header'>
              <span onClick={this.closeModal} className='close-modal clearfix'> &times; </span>
              <h1 className='modal-title'> Update Tweet </h1>
            </div>

            <div className='modal-body'>
              <form onSubmit={this.handleEditTweet}>
                <div className='form-group'>
                  <label htmlFor='title'>Title</label>
                  <input onChange={this.handleChange} value={title} type='text' name='title' className='form-control' required placeholder='Enter your tweet title' />
                </div>
                <div className='form-group'>
                  <label htmlFor='tweet'>Update your Tweet</label>
                  <textarea onChange={this.handleChange} value={content} cols='10' rows='8' name='content' className='form-control' required placeholder='Edit your tweet...or paste another tweet' />
                </div>


                <div className='form-group'>

                  <button type='submit' className='form-control btn btn-primary'> Update Tweet </button>
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

export default EditTweetModal;