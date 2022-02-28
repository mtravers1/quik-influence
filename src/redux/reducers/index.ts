import { combineReducers } from 'redux';
import nav from './nav';
import campaigns from './campaign';

const reducers = combineReducers({
  nav,
  campaigns,
});

export default reducers;
