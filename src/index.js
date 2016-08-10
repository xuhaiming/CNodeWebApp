import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import MainPage from './components/MainPage';
import { Router, Route, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const RootContainer = () => (
  <MuiThemeProvider>
    <MainPage />
  </MuiThemeProvider>
);

const App = () => {
  const history = useRouterHistory(createHashHistory)({ queryKey: false });
  const middleware = routerMiddleware(history);
  const store = createStore(
    reducers,
    window.devToolsExtension && window.devToolsExtension(),
    applyMiddleware(middleware)
  );
  const reduxHistory = syncHistoryWithStore(history, store);

  return (
    <Provider store={store}>
      <Router history={reduxHistory}>
        <Route path="/" component={RootContainer} />
        <Route path="/:tabName" component={RootContainer} />
      </Router>
    </Provider>
  );
};

render(<App />, document.getElementById('root'));
