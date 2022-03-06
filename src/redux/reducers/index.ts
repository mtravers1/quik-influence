import { combineReducers } from 'redux';
import nav from './nav';
import auth from './auth';
import campaigns from './campaigns';

const reducers = combineReducers({
  nav,
  auth,
  campaigns,
});

export default reducers;
