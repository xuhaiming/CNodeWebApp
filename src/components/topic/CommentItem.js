import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import Highlight from 'react-highlight';

const styles = {
  title: {
    cursor: 'pointer'
  },
  commentContainer: {
    margin: '10px 0'
  }
};

const CommentItem = ({ comment, goToUserPage }) => (
  <Card containerStyle={styles.commentContainer}>
    <CardHeader
      title={comment.author.loginname}
      subtitle={comment.create_at}
      avatar={comment.author.avatar_url}
      style={styles.title}
      onTouchTap={() => goToUserPage(comment.author.loginname)}
    />
    <CardText>
      <Highlight innerHTML>
        {comment.content}
      </Highlight>
    </CardText>
  </Card>
);

CommentItem.propTypes = {
  comment: React.PropTypes.object.isRequired
};

const mapDispatchToProps = dispatch => ({
    goToUserPage: userId => {
        dispatch(push(`/user/${userId}`));
    }
});

export default connect(
    null,
    mapDispatchToProps
)(CommentItem);
