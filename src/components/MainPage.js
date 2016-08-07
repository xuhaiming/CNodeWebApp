import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from './Tabs';
import { get } from '../api/client';

class MainPage extends Component {
  componentDidMount() {
    get('topics').then(data => this.props.fetchData('all', data));
  }

  render() {
    return (
      <div>
        <Tabs />
      </div>
    );
  }
}

MainPage.propTypes = {
  fetchData: React.PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  fetchData: (tab, data) => {
    dispatch({
      type: 'TOPICS_FETCH',
      data,
      tab
    });
  }
});

export default connect(
  null,
  mapDispatchToProps
)(MainPage);
