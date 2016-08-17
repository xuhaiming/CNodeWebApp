import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import { push } from 'react-router-redux';
import styles from '../styles';

const TopicItem = ({ topic, goToDetailPage }) => (
  <RaisedButton fullWidth style={styles.titleContainer} onClick={() => goToDetailPage(topic)}>
    <h3 style={styles.title}>{topic.title}</h3>
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

