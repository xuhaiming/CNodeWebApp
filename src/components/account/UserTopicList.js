import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { List, ListItem } from 'material-ui/List';
import Avatar from 'material-ui/Avatar';
import TimeAgo from '../shared/TimeAgo';

const UserTopicList = ({ topics, goToTopicPage }) => {
  const userTopics = topics.map(topic => (
    <ListItem
      key={topic.id}
      primaryText={topic.title}
      secondaryText={<TimeAgo data={topic.last_reply_at} />}
      leftAvatar={<Avatar src={topic.author.avatar_url} />}
      onTouchTap={() => goToTopicPage(topic.id)}
    />
  ));

  return (
    <List>
      {userTopics}
    </List>
  );
};

UserTopicList.propTypes = {
  topics: React.PropTypes.array.isRequired,
  goToTopicPage: React.PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  goToTopicPage: topicId => {
    dispatch(push(`/topic/${topicId}`));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(UserTopicList);
