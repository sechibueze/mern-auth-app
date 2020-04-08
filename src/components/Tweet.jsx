import React, { Component } from 'react';
import EditTweetModal from './modals/EditTweetModal';
class Tweet extends Component {
  state = {}
  render() {
    const { tweet, tweet: { title, content, tweetter } } = this.props;
    return (
      <div className='tweet'>
        <div className='tweet-header'>
          <h3 className='tweet-title'> {title}</h3>
          <span className='tweeter'>{tweetter}</span>
        </div>
        <article className='tweet-content'>
          {content}
        </article>
        <div className='tweet-footer'>
          <EditTweetModal tweet={tweet} />
        </div>
      </div>
    );
  }
}

export default Tweet;