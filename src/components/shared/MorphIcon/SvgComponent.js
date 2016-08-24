import React, { Component } from 'react';

class SvgComponent extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <svg width="30" height="30" fill="#666666" viewBox="0 0 30 30">
        <path d={this.props.path} />
      </svg>
    );
  }
}

SvgComponent.propTypes = {
  path: React.PropTypes.string.isRequired
};

export default SvgComponent;
