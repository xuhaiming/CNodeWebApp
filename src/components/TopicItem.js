import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
  titleContainer: {
    margin: 0,
    height: 65
  },
  title: {
    margin: 0
  }
};

const TopicItem = ({ topic }) => (
  <RaisedButton fullWidth style={styles.titleContainer}>
    <h3 style={styles.title}>{topic.title}</h3>
  </RaisedButton>
);

TopicItem.propTypes = {
  topic: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired
  }).isRequired
};

export default TopicItem;
