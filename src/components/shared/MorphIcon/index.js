import React, { Component } from 'react';
import { MorphReplace } from 'react-svg-morph';
import SvgComponent from './SvgComponent';

const styles = {
  iconContainer: {
    zIndex: 1,
    padding: 5
  }
};

class MorphIcon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onHover: false
    };

    this.toggleHoverState = this.toggleHoverState.bind(this);
  }

  toggleHoverState() {
    this.setState({ onHover: !this.state.onHover });
  }

  render() {
    return (
      <div
        onMouseEnter={this.toggleHoverState}
        onMouseLeave={this.toggleHoverState}
        style={Object.assign({}, styles.iconContainer, this.props.iconStyle)}
      >
        <MorphReplace width={this.props.size} height={this.props.size}>
          {this.state.onHover ?
            <SvgComponent key="enterState" path={this.props.hoverState} {...this.props} />
            :
            <SvgComponent key="leaveState" path={this.props.originState} {...this.props} />}
        </MorphReplace>
      </div>
    );
  }
}

MorphIcon.propTypes = {
  originState: React.PropTypes.string.isRequired,
  hoverState: React.PropTypes.string.isRequired,
  iconStyle: React.PropTypes.any,
  size: React.PropTypes.number
};

MorphIcon.defaultProps = { size: 25 };

export default MorphIcon;
