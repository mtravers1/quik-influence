import { combineReducers } from 'redux';
import nav from './nav';
import auth from './auth';
import campaigns from './campaigns';
import leads from './leads';

const reducers = combineReducers({
  nav,
  auth,
  campaigns,
  leads,
});


export default reducers;
