import React, { Component } from 'react';
import { MorphReplace } from 'react-svg-morph';
import SvgComponent from './SvgComponent';

class MorphIcon extends Component {
  constructor(props) {
    super(props);

    this.state = {
      onHover: true
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
      >
        <MorphReplace width={30} height={30}>
          {this.state.onHover ?
            <SvgComponent key="enterState" path={this.props.originState} />
            :
            <SvgComponent key="leaveState" path={this.props.changedState} />}
        </MorphReplace>
      </div>
    );
  }
}

export default MorphIcon;
