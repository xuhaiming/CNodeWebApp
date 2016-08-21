import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { push } from 'react-router-redux';

const styles = {
  topicItemTitleContainer: {
    margin: '5px 10px',
    width: 'calc(100% - 20px)',
    height: 'auto'
  },
  topicItemContainer: {
    textAlign: 'left',
    padding: '10px 15px'
  },
  topicItemAvatar: {
    width: 30,
    display: 'inline-block'
  },
  topicItemContent: {
    display: 'inline-block',
    marginLeft: 15,
    maxWidth: 'calc(100% - 180px)'
  },
  topicItemTitle: {
    margin: 0
  }
};

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

