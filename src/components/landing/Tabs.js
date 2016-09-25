import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';
import TopicList from './TopicList';
import { push } from 'react-router-redux';
import tabNames from '../../constants/tabNames';
import MorphIcon from '../shared/MorphIcon/index';
import iconPaths from '../shared/MorphIcon/iconPaths';
import styleConstants from '../../constants/styles';

const tabsHeight = 50;
const contentPadding = 5;
const contentHeight = styleConstants.headerHeight + tabsHeight + contentPadding * 2;

const styles = {
  swipeContainer: {
    height: `calc(100vh - ${contentHeight}px)`,
    padding: `${contentPadding}px 0`
  },
  tabsContainer: {
    position: 'fixed',
    width: '100%',
    bottom: 0,
    zIndex: 1
  },
  tabs: {
    backgroundColor: '#80bd01',
    color: '#f6f6f6',
    height: tabsHeight
  },
  icon: {
    height: 23,
    padding: 0,
    position: 'relative',
    right: 2
  },
  tab: {
    fontSize: 12,
    position: 'relative',
    top: -11
  }
};

class NavBar extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  getLocation() {
    return this.props.location === '' ? 'all' : this.props.location;
  }

  getSlideIndex() {
    return tabNames.findIndex(tab => this.getLocation() === tab.key);
  }

  handleChange(index) {
    const urlTab = tabNames[index].key === 'all' ? '' : tabNames[index].key;

    this.props.switchTab(`/${urlTab}`);
  }

  isActive(tabName) {
    return tabName === this.getLocation();
  }

  render() {
    const itemIcon = tab => (
      <MorphIcon
        originState={iconPaths[tab.key]}
        hoverState={iconPaths[`${tab.key}_after`]}
        iconStyle={styles.icon}
        size={21}
      />
    );

    const navItems = tabNames.map((tab, index) => (
      <Tab
        key={tab.key}
        label={tab.value}
        value={index}
        icon={itemIcon(tab)}
        style={styles.tab}
      />
    ));

    const topicLists = tabNames.map(({ key }) => (
      <TopicList key={key} tabName={key} isActive={this.isActive(key)} />
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
