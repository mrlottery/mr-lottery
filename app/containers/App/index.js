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

import LoginPage from 'containers/LoginPage/Loadable';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import PrubePage from 'containers/PrubePage/Loadable';
import ConceptPage from 'containers/Concepts/Loadable';
import GlobalStyle from '../../global-styles';


export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route path="/home/" component={HomePage} />
        <Route path="/prube/" component={PrubePage} />
        <Route path="/concept/" component={ConceptPage} />
        <Route component={NotFoundPage} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
