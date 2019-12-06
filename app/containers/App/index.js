import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MultiLanguage from 'containers/MultiLanguage/loadable';
import HomePage from 'containers/HomePage/loadable';
import LoginPage from 'containers/LoginPage/loadable';
import RegisterPage from 'containers/RegisterPage/loadable';
import PageNotFound from 'containers/PageNotFound/loadable';
import GlobalStyle from '../../global-styles';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/multi" component={MultiLanguage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route component={PageNotFound} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
export default App;
