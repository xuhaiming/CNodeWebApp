import React from 'react';
import { connect } from 'react-redux';
import TopicItem from './TopicItem';

const TopicList = ({ topics }) => {
  const topicList = topics.map(topic => <TopicItem key={topic.id} topic={topic} />);

  return (
    <div>
      {topicList}
    </div>
  );
};

TopicList.propTypes = {
  topics: React.PropTypes.array.isRequired
};

const mapStateToProps = state => ({ topics: state.topics.currentTopics });

export default connect(
  mapStateToProps
)(TopicList);
