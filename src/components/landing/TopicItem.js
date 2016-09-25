import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import { push } from 'react-router-redux';
import TimeAgo from '../shared/TimeAgo';

const styles = {
  topicItemContainer: {
    margin: '5px 10px',
    padding: 10,
    height: 'auto',
    width: 'calc(100% - 20px)'
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  mainContainer: {
    marginTop: 10,
    float: 'left',
    width: '100%'
  },
  avatarContainer: {
    width: 30,
    display: 'inline-block'
  },
  contentContainer: {
    width: 'calc(100% - 35px)',
    display: 'inline-block',
    verticalAlign: 'top',
    textAlign: 'left',
    paddingLeft: 5,
    fontSize: 12
  },
  createAt: {
    fontSize: 11
  },
  floatRight: {
    float: 'right'
  },
  subinfoContainer: {
    paddingTop: 2
  },
  clearFix: {
    clear: 'both'
  }
};

const TopicItem = ({ topic, goToDetailPage }) => (
  <RaisedButton
    style={styles.topicItemContainer}
    onClick={() => goToDetailPage(topic)}
  >
    <div>
      <div style={styles.title}>{topic.title}</div>
      <div style={styles.mainContainer}>
        <div style={styles.avatarContainer}>
          <Avatar src={topic.author.avatar_url} size={30} />
        </div>
        <div style={styles.contentContainer}>
          <div>{topic.author.loginname}</div>
          <div style={styles.subinfoContainer}>
            <span style={styles.createAt}>创建于：<TimeAgo data={topic.create_at} /></span>
            <span style={styles.floatRight}>{topic.reply_count} / {topic.visit_count}</span>
          </div>
        </div>
        <div style={styles.clearFix}></div>
      </div>
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
