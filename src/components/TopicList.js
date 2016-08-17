import React, { Component } from 'react';
import TopicItem from './TopicItem';
import { get } from '../api/client';
import CircularProgress from 'material-ui/CircularProgress';
import styles from '../styles';

class TopicList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const tabName = this.props.tabName;
    const isActive = this.props.isActive;

    if (!this.state.data) {
      if (isActive) {
        get('topics', { tab: tabName }).then(data => this.setState({ data }));
      }

      return <CircularProgress style={styles.progress} size={2} />;
    }

    const topicList = this.state.data.map(topic => <TopicItem key={topic.id} topic={topic} />);

    return (
      <div>
        {topicList}
      </div>
    );
  }
}

TopicList.propTypes = {
  tabName: React.PropTypes.string.isRequired,
  isActive: React.PropTypes.bool.isRequired
};

export default TopicList;
