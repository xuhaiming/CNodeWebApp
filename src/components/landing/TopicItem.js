import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import { push } from 'react-router-redux';

const styles = {
  topicItemContainer: {
    margin: '5px 10px',
    padding: 10,
    height: 'auto',
    width: 'calc(100% - 20px)'
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'left'
  },
  mainContainer: {
    marginTop: 10
  },
  avatarContainer: {
    width: 30,
    float: 'left'
  },
  contentContainer: {
    float: 'left',
    width: 'calc(100% - 30px)'
  },
  authorName: {
    fontSize: 10
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
          <Avatar src={topic.author.avatar_url} size={25} />
        </div>
        <div style={styles.contentContainer}>
          <div>
            <div style={styles.authorName}>{topic.author.loginname}</div>
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
