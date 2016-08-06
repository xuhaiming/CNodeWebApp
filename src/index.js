import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import MainPage from './components/MainPage';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const App = () => {
  const store = createStore(reducers);

  return (
    <Provider store={store}>
      <MuiThemeProvider>
        <MainPage />
      </MuiThemeProvider>
    </Provider>
  );
};

render(<App />, document.getElementById('root'));
