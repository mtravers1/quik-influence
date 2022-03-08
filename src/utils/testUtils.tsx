import { FC, ReactElement } from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'redux/reducers';

function makeTestStore(rootReducer: any, initialState: any) {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk));
  const origDispatch = store.dispatch;
  store.dispatch = jest.fn(origDispatch);
  return store;
}

const renderWithStore = (ui: ReactElement, storedefaults: any) => {
  const { initialState, ...renderOptions } = storedefaults;
  const store = makeTestStore(rootReducer, initialState);

  const Wrapper: FC = ({ children }) => {
    return <Provider store={store}>{children}</Provider>;
  };

  return render(ui, { wrapper: Wrapper, ...renderOptions });
};

export * from '@testing-library/react';
export { renderWithStore };
