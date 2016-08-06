import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from '../api/client';

class Tabs extends Component {
  constructor() {
    super();
    this.fetchTabData = this.fetchTabData.bind(this);
  }

  fetchTabData(tab) {
    get('topics', { tab }).then(data => this.props.fetchData(data));
  }

  render() {
    return (
      <div>
        <button onClick={() => this.fetchTabData()}>All</button>
        <button onClick={() => this.fetchTabData('good')}>Good</button>
        <button onClick={() => this.fetchTabData('share')}>Share</button>
        <button onClick={() => this.fetchTabData('ask')}>Ask</button>
        <button onClick={() => this.fetchTabData('job')}>Job</button>
      </div>
    );
  }
}

Tabs.propTypes = {
  fetchData: React.PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  fetchData: topics => {
    dispatch({
      type: 'TOPICS_FETCH',
      data: topics
    });
  }
});


export default connect(
  null,
  mapDispatchToProps
)(Tabs);
