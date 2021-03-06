import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import CircularProgress from 'material-ui/CircularProgress';
import { get } from '../../api/client';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import CommentItem from './CommentItem';
import commonStyle from '../../styles/common';
import Highlight from 'react-highlight';
import QuillEditor from '../shared/QuillEditor';
import TimeAgo from '../shared/TimeAgo';

const styles = {
  topicDetailContainer: {
    padding: '0 10px'
  },
  title: {
    fontWeight: 'bold'
  },
  header: {
    cursor: 'pointer'
  },
  progress: commonStyle.progress
};

class TopicPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const topic = this.state.data;

    if (!topic) {
      get(this.props.location).then(data => {
        this.setState({ data });
      });

      return <CircularProgress style={styles.progress} size={1.5} />;
    }

    const commentList = topic.replies && topic.replies.map(reply => (
      <CommentItem key={reply.id} comment={reply} />
    ));

    return (
      <div style={styles.topicDetailContainer}>
        <Card>
          <CardHeader
            title={topic.author.loginname}
            subtitle={<TimeAgo data={topic.create_at} />}
            avatar={topic.author.avatar_url}
            titleStyle={styles.title}
            style={styles.header}
            onTouchTap={() => this.props.goToUserPage(topic.author.loginname)}
          />
          <CardTitle title={topic.title} style={styles.title} />
          <CardText>
            <Highlight innerHTML>
              {topic.content}
            </Highlight>
          </CardText>
        </Card>
        <h3>{commentList.length === 0 ? '无评论' : `评论(${commentList.length})`}</h3>
        {commentList}
        <QuillEditor />
      </div>
    );
  }
}

TopicPage.propTypes = {
  location: React.PropTypes.string.isRequired,
  goToUserPage: React.PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  location: state.routing.locationBeforeTransitions.pathname
});

const mapDispatchToProps = dispatch => ({
  goToUserPage: userId => {
    dispatch(push(`/user/${userId}`));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TopicPage);
