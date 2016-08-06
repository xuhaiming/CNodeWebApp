import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from './Tabs';
import TopicList from './TopicList';
import { get } from '../api/client';

class MainPage extends Component {
  componentDidMount() {
    get('topics').then(data => this.props.fetchData(data));
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
