import { combineReducers } from 'redux';
import nav from './nav';
import auth from './auth';
import campaigns from './campaigns';
import generals from './generals';
import leads from './leads';
import cart from './cart';
import product from './product';

const reducers = combineReducers({
  nav,
  auth,
  campaigns,
  leads,
  generals,
  cart,
  product,
});

export default reducers;
