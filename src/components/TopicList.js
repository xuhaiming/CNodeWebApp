import React, { Component } from 'react';
import TopicItem from './TopicItem';

class TopicList extends Component {
  constructor() {
    super();
  }

  render() {
    const topicList = this.props.topics.map(topic => <TopicItem key={topic.id} topic={topic}/>);

    return (
      <div>
        {topicList}
      </div>
    );
  }
}

export default TopicList;