import { combineReducers } from 'redux';
import nav from './nav';
import auth from './auth';

const reducers = combineReducers({
  nav,
  auth
});


export default reducers;
