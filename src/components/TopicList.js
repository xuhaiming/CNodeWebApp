import React, { Component } from 'react';
import { connect } from 'react-redux';
import TopicItem from './TopicItem';
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
  progress: {
    margin: '250px auto',
    display: 'block'
  }
};

class TopicList extends Component {
  render() {
    const topics = this.props.topics;
    const tabName = this.props.location;

    if (!topics[tabName]) {
      return <CircularProgress style={styles.progress} size={2} />;
    }

    const topicList = topics[tabName].map(topic => <TopicItem key={topic.id} topic={topic} />);

    return (
      <div>
        {topicList}
      </div>
    );
  }
}

TopicList.propTypes = {
  topics: React.PropTypes.object.isRequired,
  location: React.PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  topics: state.topics,
  location: state.routing.locationBeforeTransitions.pathname.replace('/', '')
});

export default connect(
  mapStateToProps
)(TopicList);
