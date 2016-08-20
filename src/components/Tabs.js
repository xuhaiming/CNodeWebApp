import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import TopicList from './TopicList';
import { push } from 'react-router-redux';
import styles from '../styles';

const tabNames = ['all', 'good', 'share', 'ask', 'job'];

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  getLocation() {
    return this.props.location === '' ? 'all' : this.props.location;
  }

  getSlideIndex() {
    return tabNames.indexOf(this.getLocation());
  }

  handleChange(index) {
    const urlTab = tabNames[index] === 'all' ? '' : tabNames[index];

    this.props.switchTab(`/${urlTab}`);
  }

  isActive(tabName) {
    return tabName === this.getLocation();
  }

  render() {
    const navItems = tabNames.map((name, index) => (
      <Tab key={name} label={name} value={index} />
    ));

    const topicLists = tabNames.map(name => (
      <TopicList key={name} tabName={name} isActive={this.isActive(name)} />
    ));

    return (
      <div>
        <Tabs
          style={styles.tabsContainer}
          tabItemContainerStyle={styles.tabs}
          onChange={this.handleChange}
          value={this.getSlideIndex()}
        >
          {navItems}
        </Tabs>
        <SwipeableViews
          index={this.getSlideIndex()}
          onChangeIndex={this.handleChange}
          containerStyle={styles.swipeContainer}
          slideStyle={styles.swipeSlide}
        >
          {topicLists}
        </SwipeableViews>
      </div>
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
