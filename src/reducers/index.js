import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import dialogStatus from './dialogStatus';

const cNodeApp = combineReducers({
  routing: routerReducer,
  dialogStatus
});

export default cNodeApp;
