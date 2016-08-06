import React, { Component } from 'react';
import request from 'superagent';
import Tabs from './Tabs';
import TopicList from './TopicList';

class MainPage extends Component {
  constructor() {
    super();

    this.filterTab = this.filterTab.bind(this);

    this.state = {
      originalTopics: [],
      topics: []
    };
  }

  componentDidMount() {
    request
      .get('https://cnodejs.org/api/v1/topics')
      .end((err, res) => {
        this.setState({
          originalTopics: res.body.data,
          topics: res.body.data
        });
      });
  }

  filterCriteria(topic, tab) {
    if (tab === 'good') {
      return topic.good;
    }

    return topic.tab === tab;
  }

  filterTab(tab) {
    const topics = this.state.originalTopics.filter(topic => this.filterCriteria(topic, tab));

    this.setState({
      topics
    });
  }

  render() {
    return (
      <div>
        <Tabs filterTab={this.filterTab} />
        <TopicList topics={this.state.topics} />
      </div>
    );
  }
}

export default MainPage;
