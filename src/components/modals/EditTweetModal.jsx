import React, { Component, Fragment } from 'react';
import NavLink from '../NavLink';
class EditTweetModal extends Component {
  state = {
    isOpen: false,
    tweet: ''
  }
  componentDidMount() {
    console.log('thi pronkn', this.props.tweet)
    this.setState({
      tweet: this.props.tweet
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
  toggleEditTweetModal = (_) => {

    this.setState({ isOpen: !this.state.isOpen });
  }
  handleChange = ({ target: { name, value } }) => {
    const upd = { [name]: value };
    console.log('handling', upd)
    const newTweet = Object.assign({}, this.state.tweet, upd)
    this.setState({
      ...this.state,
      tweet: newTweet
    });
  }

  handleEditTweet = e => {
    e.preventDefault();
    const { tweet } = this.state;

    console.log('Updated Tweet', { tweet });

    this.toggleEditTweetModal();

  }
  render() {

    const { isOpen, tweet } = this.state;

    const status = isOpen === true ? 'show' : '';
    return (
      <Fragment>
        <NavLink label='Edit' onClick={this.toggleEditTweetModal} />
        <div className={`modal ${status}`}>

          <div className='modal-content'>
            <div className='modal-header'>
              <span onClick={this.closeModal} className='close-modal clearfix'> &times; </span>
              <h1 className='modal-title'> Update Tweet </h1>
              {tweet.id}
              {tweet.title}
            </div>
            <div className='modal-body'>
              <form onSubmit={this.handleEditTweet}>
                <div className='form-group'>
                  <label htmlFor='title'>Title</label>
                  <input onChange={this.handleChange} value={tweet.title} type='text' name='title' className='form-control' required placeholder='Enter your tweet title' />
                </div>
                <div className='form-group'>
                  <label htmlFor='tweet'>Update your Tweet</label>
                  <textarea onChange={this.handleChange} value={tweet.content} cols='10' rows='8' name='content' className='form-control' required placeholder='Edit your tweet...or paste another tweet' />
                </div>
                {/* 
                

                <div className='form-group'>
                  <label htmlFor='email'>Email</label>
                  <input onChange={this.handleChange} value={email} type='email' name='email' className='form-control' required placeholder='Enter your email address' />
                </div>

                <div className='form-group'>
                  <label htmlFor='password'>Password</label>
                  <input onChange={this.handleChange} value={password} type='password' name='password' className='form-control' required placeholder='Enter your password' />
                </div> */}

                <div className='form-group'>

                  <button type='submit' className='form-control btn btn-primary'> Update Tweet </button>
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

export default EditTweetModal;