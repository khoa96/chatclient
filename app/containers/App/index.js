import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MultiLanguage from 'containers/MultiLanguage/loadable';
import HomePage from 'containers/HomePage/loadable';
import LoginPage from 'containers/LoginPage/loadable';
import routers from 'utils/routers';
import RegisterPage from 'containers/RegisterPage/loadable';
import PageNotFound from 'containers/PageNotFound/loadable';
import PrivateRouter from 'routers/PrivateRouter';
import ForgotPassword from 'containers/ForgotPassword/loadable';
import GlobalStyle from '../../global-styles';

function App() {
  return (
    <div>
      <Switch>
        <PrivateRouter exact path={routers.homeChat} component={HomePage} />
        <Route exact path={routers.forgotPassword} component={ForgotPassword} />
        <Route exact path="/multi" component={MultiLanguage} />
        <Route exact path={routers.login} component={LoginPage} />
        <Route exact path={routers.register} component={RegisterPage} />
        <Route component={PageNotFound} />
      </Switch>
      <GlobalStyle />
    </div>
  );
}
export default App;
