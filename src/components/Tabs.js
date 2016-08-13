import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui/Tabs';
import TopicList from './TopicList';
import { push } from 'react-router-redux';

const tabNames = ['all', 'good', 'share', 'ask', 'job'];

class NavBar extends Component {
  constructor() {
    super();

    this.onActive = this.onActive.bind(this);
  }

  onActive(tab) {
    const urlTab = tab.props.value === 'all' ? '' : tab.props.value;

    this.props.switchTab(`/${urlTab}`);
  }

  getLocation() {
    return this.props.location === '' ? 'all' : this.props.location;
  }

  isActive(tabName) {
    return tabName === this.getLocation();
  }

  render() {
    const navItems = tabNames.map(name => (
      <Tab onActive={this.onActive} key={name} label={name} value={name}>
        <TopicList tabName={name} isActive={this.isActive(name)} />
      </Tab>
    ));

    return (
      <Tabs value={this.getLocation()}>
        {navItems}
      </Tabs>
    );
  }
}

NavBar.propTypes = {
  location: React.PropTypes.string.isRequired,
  switchTab: React.PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  location: state.routing.locationBeforeTransitions.pathname.replace('/', '')
});

const mapDispatchToProps = dispatch => ({
  switchTab: (tab) => {
    dispatch(push(tab));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
