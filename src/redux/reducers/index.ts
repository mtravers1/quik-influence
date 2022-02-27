import { combineReducers } from 'redux';
import nav from './nav';
import campaigns from './campaigns';

const reducers = combineReducers({
  nav,
  campaigns
});

export default reducers;
