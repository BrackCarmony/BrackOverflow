import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import homePage from './components/homePage'
import questionPage from './components/questionPage'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={homePage} />
    <Route path = "questions/:id"  component = {questionPage} />
  </Route>
);

// <Route path="posts/new" component={PostsNew} />
// <Route path="posts/:id" component={PostsShow} />
