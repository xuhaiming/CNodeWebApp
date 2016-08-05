import React, { Component } from 'react';
import { render } from 'react-dom';
import request from 'superagent';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';

import { green50 } from 'material-ui/styles/colors';

injectTapEventPlugin();

class TopicItem extends Component {
  constructor() {
    super();
    this.style = {
      width: '100%'
    };
  }

  render() {
    return (
      <RaisedButton style={this.style}>
        <h3>{this.props.topic.title}</h3>
      </RaisedButton>
    );
  }
}

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
    const topicList = this.state.topics.map(topic => <TopicItem key={topic.id} topic={topic} />);

    return (
      <div>
        {topicList}
      </div>
    );
  }
}

const App = () => (
  <MuiThemeProvider>
    <TopicList />
  </MuiThemeProvider>
);

render(<App />, document.getElementById('root'));
