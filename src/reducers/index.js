import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import dialogStatus from './dialogStatus';
import toast from './toast';
import user from './user';

const cNodeApp = combineReducers({
  routing: routerReducer,
  dialogStatus,
  toast,
  user
});

export default cNodeApp;
