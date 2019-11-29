/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MultiLanguage from 'containers/MultiLanguage/loadable';
import HomePage from 'containers/HomePage/loadable';
import PageNotFound from 'containers/PageNotFound/loadable';

import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/multi" component={MultiLanguage} />
        <Route component={PageNotFound} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
