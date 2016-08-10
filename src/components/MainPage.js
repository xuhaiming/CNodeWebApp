import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tabs from './Tabs';
import { get } from '../api/client';

class MainPage extends Component {
  render() {
    return (
      <div>
        <Tabs />
      </div>
    );
  }
}

export default MainPage;
