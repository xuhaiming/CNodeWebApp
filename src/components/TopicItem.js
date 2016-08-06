import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

class TopicItem extends Component {
  constructor() {
    super();

    this.style = {
      width: '100%'
    };
  }

  render() {
    return (
      <RaisedButton style={this.style}>
        <h3>{this.props.topic.title}</h3>
      </RaisedButton>
    );
  }
}

TopicItem.propTypes = {
  topic: React.PropTypes.shape({
    title: React.PropTypes.string.isRequired
  }).isRequired
};


export default TopicItem;
