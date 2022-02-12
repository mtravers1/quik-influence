import { createStore, applyMiddleware, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/logOnly';
import thunk from 'redux-thunk';
import reducers from './redux/reducers';
import { createWrapper, Context } from 'next-redux-wrapper';

const middleware = [thunk];

const makeStore = (context: Context) =>
  createStore(
    reducers,
    process.env.NODE_ENV === 'development'
      ? composeWithDevTools(applyMiddleware(...middleware))
      : applyMiddleware(...middleware)
  );

// const debug = process.env.NODE_ENV;
const debug = false;

export const wrapper = createWrapper<Store>(makeStore, { debug });
