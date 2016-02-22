import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Router, browserHistory } from 'react-router';
// import { createStore, applyMiddleware } from 'redux';

import App from './components/app.js'

import routes from  './routes.js';
import reducers from './reducers/index.js'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
//import App from './components/app';
//import reducers from './reducers';

//const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store = {createStoreWithMiddleware(reducers)}>
    <div>
      <Router history={browserHistory} routes={routes} />
    </div>
  </Provider>
  , document.querySelector('.container'));
