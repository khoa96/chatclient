import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import Alert from 'components/commons/Alert';
import InputText from 'components/commons/InputText';
import InputCheckbox from 'components/commons/InputCheckbox';
import InputPassword from 'components/commons/InputPassword';
import Button from 'components/commons/Button';
import FacebookIcon from 'images/icons/facebook.svg';
import GoogleIcon from 'images/icons/google.svg';
import GithubhIcon from 'images/icons/github.svg';
import {
  getErrorSelector,
  getIsLoadingSelector,
  getUserSelector,
} from './selectors';
import { handleInputChange, handleSubmitLogin } from './actions';
import { CONTEXT } from './constanst';
import reducer from './reducers';
import saga from './saga';
import {
  LoginPageWrapper,
  LoginFormWrapper,
  IntroduceWrapper,
  LoginForm,
  FormBodyWrapper,
  ListContactWrapper,
  ForgotPasswordWrapper,
} from './styles';

function LoginPreviewPage({
  t,
  user,
  dispatchHandleInputChange,
  dispatchHandleSubmitLogin,
}) {
  useInjectReducer({ key: CONTEXT, reducer });
  useInjectSaga({ key: CONTEXT, saga });
  const { email, password } = user;

  const onHandleChange = event => {
    const { name, value } = event.target;
    dispatchHandleInputChange({ [name]: value });
  };

  const handleCheckDisableButton = () => {
    if (!email || !password) return true;
    return false;
  };

  const onSubmitLogin = () => {
    dispatchHandleSubmitLogin(user);
  };

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
              type="text"
              placeholder="signin.emailPlaceholder"
              name="email"
              iconClassName="ion-md-mail"
              isShowIcon
              isRequired
              value={email}
              onChange={onHandleChange}
            />
            <InputPassword
              placeholder="signup.passwordPlaceholder"
              name="password"
              type="password"
              iconClassName="ion-md-lock"
              isShowIcon
              isRequired
              value={password}
              onChange={onHandleChange}
            />
            <InputCheckbox text={t('commons.remember')} name="remember" />
            <Button
              context="primary"
              disabled={handleCheckDisableButton()}
              onClick={onSubmitLogin}
            >
              {t('signin.signInTitle')}
            </Button>
            <ForgotPasswordWrapper>
              <Link to="/forgot-password">
                <Button context="link">{t('signin.forgotPassword')}</Button>
              </Link>
            </ForgotPasswordWrapper>
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
  user: PropTypes.object,
  dispatchHandleInputChange: PropTypes.func.isRequired,
  dispatchHandleSubmitLogin: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: getUserSelector(),
  isLoading: getIsLoadingSelector(),
  error: getErrorSelector(),
});

const mapDispatchToProps = dispatch => ({
  dispatchHandleInputChange: data => dispatch(handleInputChange(data)),
  dispatchHandleSubmitLogin: data => dispatch(handleSubmitLogin(data)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withTranslation(),
  withConnect,
)(LoginPreviewPage);
