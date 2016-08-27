import React, { Component } from 'react';

class SvgComponent extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <svg width="30" height="30" fill={this.props.fill} viewBox="0 0 30 30">
        <path d={this.props.path} />
      </svg>
    );
  }
}

SvgComponent.propTypes = {
  path: React.PropTypes.string.isRequired,
  fill: React.PropTypes.string
};

SvgComponent.defaultProps = { fill: 'white' };

export default SvgComponent;
