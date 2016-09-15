import React, { Component } from 'react';

class SvgComponent extends Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const size = this.props.size;

    return (
      <svg width={size} height={size} fill={this.props.fill} viewBox={`0 0 ${size} ${size}`}>
        <path d={this.props.path} />
      </svg>
    );
  }
}

SvgComponent.propTypes = {
  path: React.PropTypes.string.isRequired,
  fill: React.PropTypes.string,
  size: React.PropTypes.number
};

SvgComponent.defaultProps = { fill: 'white' };

export default SvgComponent;
