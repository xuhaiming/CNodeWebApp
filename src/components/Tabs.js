import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from '../api/client';
import { Tabs, Tab } from 'material-ui/Tabs';
import TopicList from './TopicList';

const tabNames = ['all', 'good', 'share', 'ask', 'job'];

class NavBar extends Component {
  constructor() {
    super();

    this.onActive = this.onActive.bind(this);
  }

  onActive(tab) {
    const tabName = tab.props.label;

    get('topics', { tab: tabName }).then(data => this.props.fetchData(tabName, data));
  }

  render() {
    const navItems = tabNames.map(name => (
      <Tab onActive={this.onActive} key={name} label={name}>
        <TopicList tabName={name} />
      </Tab>
    ));

    return (
      <Tabs>
        {navItems}
      </Tabs>
    );
  }
}

NavBar.propTypes = {
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
)(NavBar);
