import { combineReducers } from 'redux';
import topics from './topics';
import { routerReducer } from 'react-router-redux';

const cNodeApp = combineReducers({
  topics,
  routing: routerReducer
});

export default cNodeApp;
