import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import dialogStatus from './dialogStatus';
import toast from './toast';

const cNodeApp = combineReducers({
  routing: routerReducer,
  dialogStatus,
  toast
});

export default cNodeApp;
