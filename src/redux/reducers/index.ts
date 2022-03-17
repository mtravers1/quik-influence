import { combineReducers } from 'redux';
import nav from './nav';
import auth from './auth';
import campaigns from './campaigns';
import generals from './generals';
import leads from './leads';

const reducers = combineReducers({
  nav,
  auth,
  campaigns,
  leads,
  generals,
});

export default reducers;
