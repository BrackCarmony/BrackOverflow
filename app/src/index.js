import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import { Router, hashHistory } from 'react-router';
// import { createStore, applyMiddleware } from 'redux';
var css = require("./styles/styles.scss");

import App from './components/app'

import routes from  './routes';
import reducers from './reducers/index'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);
//import App from './components/app';
//import reducers from './reducers';

//const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store = {createStoreWithMiddleware(reducers)}>
    <div>
      <Router history={hashHistory} routes={routes} />
    </div>
  </Provider>
  , document.querySelector('.container'));
