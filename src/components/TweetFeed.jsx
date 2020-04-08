import React, { Component } from 'react';
import Tweet from './Tweet';
class TweetFeed extends Component {
  state = {
    feed: [
      {
        id: 1,
        title: 'Learning MERNstack',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolore!',
        tweetter: 'Samuel Chibueze'
      },
      {
        id: 2,
        title: 'Passionate about making a change',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolore!',
        tweetter: 'Samuel Chibueze'
      },
      {
        id: 3,
        title: 'The fight against COVID-19 continues',
        content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, dolore!',
        tweetter: 'Samuel Chibueze'
      }

    ]
  }
  render() {
    const { feed } = this.state;
    const TweetFeed = feed.map(tweet => <Tweet key={`tweet-${tweet.id}`} tweet={tweet} />)
    return (
      <div className='tweetfeed'>
        {TweetFeed}
      </div>
    )

  }
}

export default TweetFeed;