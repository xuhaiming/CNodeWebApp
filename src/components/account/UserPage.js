import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from '../../api/client';
import CircularProgress from 'material-ui/CircularProgress';
import { Card, CardHeader, CardText } from 'material-ui/Card';
import UserTopicList from './UserTopicList';
import commonStyle from '../../styles/common';
import TimeAgo from '../shared/TimeAgo';

const styles = {
  progress: commonStyle.progress
};

class UserPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const userInfo = this.state.data;

    if (!userInfo) {
      get(this.props.location).then(data => this.setState({ data }));

      return <CircularProgress style={styles.progress} size={1.5} />;
    }

    return (
      <Card>
        <CardHeader
          title={userInfo.loginname}
          subtitle={<TimeAgo data={userInfo.create_at} />}
          avatar={userInfo.avatar_url}
        />
        <CardText>
          <div>
            <div>Github账号： {userInfo.githubUsername}</div>
            <div>积分： {userInfo.score}</div>
          </div>
          <div>
            <div>最近创建的话题</div>
            <UserTopicList topics={userInfo.recent_topics} />
          </div>
          <div>
            <div>最近参与的话题</div>
            <UserTopicList topics={userInfo.recent_replies} />
          </div>
        </CardText>
      </Card>
    );
  }
}

UserPage.propTypes = {
  location: React.PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  location: state.routing.locationBeforeTransitions.pathname
});

export default connect(
  mapStateToProps
)(UserPage);
