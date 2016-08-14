import React, { Component } from 'react';
import { connect } from 'react-redux';
import CircularProgress from 'material-ui/CircularProgress';
import { get } from '../api/client';
import { Card, CardHeader, CardTitle, CardText } from 'material-ui/Card';

const styles = {
  progress: {
    margin: '250px auto',
    display: 'block'
  }
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

      return <CircularProgress style={styles.progress} size={2} />;
    }

    return (
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
