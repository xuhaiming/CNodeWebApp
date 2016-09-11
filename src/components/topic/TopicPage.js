import React, { Component } from 'react';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import { get } from '../../api/client';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';
import CommentItem from './CommentItem';
import commonStyle from '../../styles/common';
import Highlight from 'react-highlight';

const styles = {
  topicDetailContainer: {
    padding: '0 10px'
  },
  title: {
    fontWeight: 'bold'
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
            title={topic.author.loginname}
            subtitle={topic.create_at}
            avatar={topic.author.avatar_url}
            titleStyle={styles.title}
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
