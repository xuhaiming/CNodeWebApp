import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const cNodeApp = combineReducers({
  routing: routerReducer
});

export default cNodeApp;
