import React, { Component } from 'react';

class Tabs extends Component {
  constructor() {
    super();
    this.filterGood = this.filterTab.bind(this, 'good');
    this.filterShare = this.filterTab.bind(this, 'share');
    this.filterAsk = this.filterTab.bind(this, 'ask');
    this.filterJob = this.filterTab.bind(this, 'job');
  }

  filterTab(tab) {
    this.props.filterTab(tab);
  }

  render() {
    return (
      <div>
        <button>All</button>
        <button onClick={this.filterGood}>Good</button>
        <button onClick={this.filterShare}>Share</button>
        <button onClick={this.filterAsk}>Ask</button>
        <button onClick={this.filterJob}>Job</button>
      </div>
    );
  }
}

export default Tabs;