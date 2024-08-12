import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';

import reducers from './reducers';

export const history = createBrowserHistory();

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

export default store;
