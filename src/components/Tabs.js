import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get } from '../api/client';
import { Tabs, Tab } from 'material-ui/Tabs';
import TopicList from './TopicList';
import { push } from 'react-router-redux';

const tabNames = ['all', 'good', 'share', 'ask', 'job'];

class NavBar extends Component {
  constructor() {
    super();

    this.onActive = this.onActive.bind(this);
  }

  componentDidMount() {
    this.renderTab(this.props.location);
  }

  onActive(tab) {
    this.renderTab(tab.props.value);
  }

  renderTab(currentTab) {
    this.props.switchTab(`/${currentTab}`);
    get('topics', { tab: currentTab }).then(data => this.props.fetchData(currentTab, data));
  }

  render() {
    const navItems = tabNames.map(name => (
      <Tab onActive={this.onActive} key={name} label={name} value={name}>
        <TopicList tabName={name} />
      </Tab>
    ));

    return (
      <Tabs value={this.props.location}>
        {navItems}
      </Tabs>
    );
  }
}

NavBar.propTypes = {
  location: React.PropTypes.string.isRequired,
  fetchData: React.PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  location: state.routing.locationBeforeTransitions.pathname.replace('/', '')
});

const mapDispatchToProps = dispatch => ({
  switchTab: (tab) => {
    dispatch(push(tab));
  },
  fetchData: (tab, data) => {
    dispatch({
      type: 'TOPICS_FETCH',
      data,
      tab
    });
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
