import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import Alert from 'components/commons/Alert';
import InputText from 'components/commons/InputText';
import Button from 'components/commons/Button';
import FacebookIcon from 'images/icons/facebook.svg';
import GoogleIcon from 'images/icons/google.svg';
import GithubhIcon from 'images/icons/github.svg';
import {
  LoginPageWrapper,
  LoginFormWrapper,
  IntroduceWrapper,
  LoginForm,
  FormBodyWrapper,
  ListContactWrapper,
} from './styles';

function LoginPreviewPage({ t }) {
  return (
    <LoginPageWrapper>
      <LoginFormWrapper>
        <LoginForm>
          <div className="notification-box">
            <Alert type="success" message="home.alertSuccess" />
          </div>
          <div className="login-form-header">
            <span>{t('signin.signInTitle')}</span>
          </div>
          <FormBodyWrapper>
            <InputText
              placeholder="signin.emailPlaceholder"
              name="email"
              iconClassName="ion-md-mail"
              isShowIcon
              isRequired
            />
            <InputText
              placeholder="signin.passwordPlaceholder"
              name="password"
              iconClassName="ion-md-lock"
              isShowIcon
              isRequired
            />
            <Button context="primary">{t('signin.signInTitle')}</Button>
            <ListContactWrapper>
              <span className="title-list-contact">
                {t('signup.titleListContact')}
              </span>
              <div className="list-contact">
                <Button
                  context="circle"
                  type="facebook"
                  className="btn-contact"
                >
                  <img src={FacebookIcon} alt="facebook" />
                </Button>
                <Button context="circle" type="google" className="btn-contact">
                  <img src={GoogleIcon} alt="facebook" />
                </Button>
                <Button context="circle" type="twiter" className="btn-contact">
                  <img src={GithubhIcon} alt="facebook" />
                </Button>
              </div>
            </ListContactWrapper>
            <p className="confirm">
              <span>{t('signup.confirmSignUp')}</span>
              <Link to="/register">
                <Button context="link">{t('signin.clickHere')}</Button>
              </Link>
            </p>
          </FormBodyWrapper>
        </LoginForm>
      </LoginFormWrapper>
      <IntroduceWrapper>
        <h2 className="title-introduce">{t('signup.introduce')}</h2>
        <h4 className="action-introduce">{t('signup.action')}</h4>
      </IntroduceWrapper>
    </LoginPageWrapper>
  );
}

LoginPreviewPage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(LoginPreviewPage);
