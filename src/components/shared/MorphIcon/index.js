import React, { Component } from 'react';
import { MorphReplace } from 'react-svg-morph';
import SvgComponent from './SvgComponent';

const styles = {
  iconContainer: {
    zIndex: 1
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
        style={styles.iconContainer}
      >
        <MorphReplace width={30} height={30}>
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
  hoverState: React.PropTypes.string.isRequired
};


export default MorphIcon;
