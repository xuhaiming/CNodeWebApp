import React from 'react';
import MainPage from '../components/landing/MainPage';
import Header from '../components/shared/Header';
import Toast from '../components/shared/Toast';
import TopicPage from '../components/topic/TopicPage';
import UserPage from '../components/account/UserPage';
import { Router, Route } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Style } from 'radium';
import styles from '../styles/rules';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const App = ({ history, store }) => {
  const reduxHistory = syncHistoryWithStore(history, store);

  return (
    <MuiThemeProvider>
      <div>
        <Style rules={styles} />
        <Header />
        <Router history={reduxHistory}>
          <Route path="/" component={MainPage} />
          <Route path="/:tabName" component={MainPage} />
          <Route path="/topic/:topicId" component={TopicPage} />
          <Route path="/user/:userId" component={UserPage} />
        </Router>
        <Toast />
      </div>
    </MuiThemeProvider>
  );
};

App.propTypes = {
  history: React.PropTypes.object.isRequired,
  store: React.PropTypes.object.isRequired
};

export default App;
