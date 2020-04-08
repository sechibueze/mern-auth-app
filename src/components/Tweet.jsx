import React, { Component } from 'react';
import EditTweetModal from './modals/EditTweetModal';
class Tweet extends Component {
  state = {}
  render() {
    const { tweet } = this.props;
    return (
      <div className='tweet'>
        <div className='tweet-header'>
          <h3 className='tweet-title'> {tweet.title}</h3>
          <span className='tweeter'>{tweet.tweetter}</span>
        </div>
        <article className='tweet-content'>
          {tweet.content}
        </article>
        <div className='tweet-footer'>
          <EditTweetModal tweet={tweet} />
        </div>
      </div>
    );
  }
}

export default Tweet;