import React, { Component } from 'react';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import { get } from '../api/client';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import styles from '../styles';
import CommentItem from './CommentItem';

class TopicPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const topic = this.state.data;

    if (!topic) {
      get(this.props.location).then(data => this.setState({ data }));

      return <CircularProgress style={styles.progress} size={1.5} />;
    }

    const commentList = topic.replies && topic.replies.map(reply => (
      <CommentItem key={reply.id} comment={reply} />
    ));

    return (
      <div style={styles.topicDetailContainer}>
        <Card>
          <CardHeader
            title={topic.title}
            subtitle={topic.author.loginname}
            avatar={topic.author.avatar_url}
          />
          <CardTitle title={topic.title} subtitle={topic.create_at} />
          <CardText>
            <div dangerouslySetInnerHTML={{ __html: topic.content }}></div>
          </CardText>
        </Card>
        <h3>{commentList.length === 0 ? '无评论' : `评论(${commentList.length})`}</h3>
        {commentList}
      </div>
    );
  }
}

TopicPage.propTypes = {
  location: React.PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  location: state.routing.locationBeforeTransitions.pathname
});

export default connect(
  mapStateToProps
)(TopicPage);
