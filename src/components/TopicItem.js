import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { push } from 'react-router-redux';
import styles from '../styles';

const TopicItem = ({ topic, goToDetailPage }) => (
  <RaisedButton
    style={styles.topicItemTitleContainer}
    onClick={() => goToDetailPage(topic)}
  >
    <div style={styles.topicItemContainer}>
      <img
        src={topic.author.avatar_url}
        alt={topic.author.loginname}
        style={styles.topicItemAvatar}
      />
      <span style={styles.topicItemContent}>
        <h4 style={styles.topicItemTitle}>{topic.title}</h4>
        <p style={{}}>{topic.author.loginname}</p>
      </span>
    </div>
  </RaisedButton>
);

TopicItem.propTypes = {
  topic: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired
  }).isRequired,
  goToDetailPage: React.PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  goToDetailPage: (topic) => {
    dispatch(push({ pathname: `topic/${topic.id}` }));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(TopicItem);

