import React from 'react';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import styles from '../styles';

const CommentItem = ({ comment }) => (
  <Card containerStyle={styles.commentContainer}>
    <CardHeader
      title={comment.author.loginname}
      subtitle={comment.create_at}
      avatar={comment.author.avatar_url}
    />
    <CardText>
      <div dangerouslySetInnerHTML={{ __html: comment.content }}></div>
    </CardText>
  </Card>
);

CommentItem.propTypes = {
  comment: React.PropTypes.object.isRequired
};

export default CommentItem;
