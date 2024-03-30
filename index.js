// index.js

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import App from './App';
import rootReducer from './redux/reducers';

// Middleware to handle async actions
const asyncMiddleware = store => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState);
  }

  return next(action);
};

// Load tasks from local storage
const persistedState = localStorage.getItem('tasks')
  ? { tasks: { tasks: JSON.parse(localStorage.getItem('tasks')) } }
  : {};

const store = createStore(rootReducer, persistedState, applyMiddleware(asyncMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
