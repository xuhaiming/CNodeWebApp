import React from 'react';
import { connect } from 'react-redux';
import TopicItem from './TopicItem';
import CircularProgress from 'material-ui/CircularProgress';

const styles = {
  progress: {
    margin: '250px auto',
    display: 'block'
  }
};

const TopicList = ({ topics, tabName }) => {
  if (!topics[tabName]) {
    return <CircularProgress style={styles.progress} size={2} />;
  }

  const topicList = topics[tabName].map(topic => <TopicItem key={topic.id} topic={topic} />);

  return (
    <div>
      {topicList}
    </div>
  );
};

TopicList.propTypes = {
  topics: React.PropTypes.object.isRequired,
  tabName: React.PropTypes.string.isRequired
};

const mapStateToProps = state => ({ topics: state.topics });

export default connect(
  mapStateToProps
)(TopicList);
