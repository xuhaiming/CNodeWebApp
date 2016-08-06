import React from 'react';
import { connect } from 'react-redux';

const Tabs = ({ filterData }) => (
  <div>
    <button onClick={() => filterData('all')}>All</button>
    <button onClick={() => filterData('good')}>Good</button>
    <button onClick={() => filterData('share')}>Share</button>
    <button onClick={() => filterData('ask')}>Ask</button>
    <button onClick={() => filterData('job')}>Job</button>
  </div>
);

Tabs.propTypes = {
  filterData: React.PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  filterData: tab => {
    dispatch({
      type: 'TOPICS_FILTER',
      tab
    });
  }
});

export default connect(
  null,
  mapDispatchToProps
)(Tabs);
