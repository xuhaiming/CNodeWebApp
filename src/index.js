import React, { Component } from 'react';
import { render } from 'react-dom';
import request from 'superagent';

class TopicList extends Component {
  constructor() {
    super();
    this.state = {
      topics: []
    };
  }

  componentWillMount() {
    request
      .get('https://cnodejs.org/api/v1/topics')
      .end((err, res) => {
        this.setState({
          topics: res.body.data
        });
      });
  }

  render() {
    const topicList = this.state.topics.map(topic => <div>{JSON.stringify(topic)}</div>);

    return (
      <div>
        {topicList}
      </div>
    );
  }
}

render(<TopicList />, document.getElementById('root'));
