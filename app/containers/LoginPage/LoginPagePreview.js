import React from 'react';
import { withTranslation } from 'react-i18next';
import {
  LoginPageWrapper,
  LoginFormWrapper,
  IntroduceWrapper,
  LoginForm,
} from './styles';

function LoginPage() {
  return (
    <LoginPageWrapper>
      <LoginFormWrapper>
        <LoginForm>login form</LoginForm>
      </LoginFormWrapper>
      <IntroduceWrapper>
        <h2 className="title-introduce">
          Talkshak is a simplest and friendly interface Messagner or plateform.
        </h2>
        <h4 className="action-introduce">Login Now And Enjoy!</h4>
      </IntroduceWrapper>
    </LoginPageWrapper>
  );
}

export default withTranslation()(LoginPage);
