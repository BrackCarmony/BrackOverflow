import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import HomePage from './components/homePage'
import QuestionPage from './components/questionPage'

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path = "questions/:id"  component = {QuestionPage} />
  </Route>
);

// <Route path="posts/new" component={PostsNew} />
// <Route path="posts/:id" component={PostsShow} />
