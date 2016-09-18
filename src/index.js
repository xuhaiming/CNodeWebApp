import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducers from './reducers';
import App from './app';
import { useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';

import highlightStyle from '../assets/styles/hybrid.css';
import quillStyle from '../assets/styles/quill.snow.css';

injectTapEventPlugin();

const AppContainer = () => {
  const history = useRouterHistory(createHashHistory)({ queryKey: false });
  const middleware = routerMiddleware(history);
  const store = createStore(
    reducers,
    window.devToolsExtension && window.devToolsExtension(),
    applyMiddleware(middleware)
  );

  if (module.hot) {
    module.hot.accept('./reducers/index', () => {
      const nextReducer = combineReducers(require('./reducers/index'));
      store.replaceReducer(nextReducer);
    });
  }

  const props = { history, store };

  return (
    <Provider store={store}>
      <App {...props} />
    </Provider>
  );
};

render(<AppContainer />, document.getElementById('root'));
