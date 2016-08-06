import React, { Component } from 'react';
import { connect } from 'react-redux';
import request from 'superagent';
import Tabs from './Tabs';
import TopicList from './TopicList';

class MainPage extends Component {
  componentDidMount() {
    request
      .get('https://cnodejs.org/api/v1/topics')
      .end((err, res) => {
        this.props.fetchData(res.body.data);
      });
  }

  render() {
    return (
      <div>
        <Tabs />
        <TopicList />
      </div>
    );
  }
}

MainPage.propTypes = {
  fetchData: React.PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  fetchData: topics => {
    dispatch({
      type: 'TOPICS_FETCH',
      data: topics
    });
  }
});

export default connect(
  null,
  mapDispatchToProps
)(MainPage);
