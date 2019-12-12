import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import _isEmpty from 'lodash/isEmpty';
import _get from 'lodash/get';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import Alert from 'components/commons/Alert';
import Spinner from 'components/commons/Spinner';
import InputText from 'components/commons/InputText';
import InputCheckbox from 'components/commons/InputCheckbox';
import InputPassword from 'components/commons/InputPassword';
import Button from 'components/commons/Button';
import FacebookIcon from 'images/icons/facebook.svg';
import GoogleIcon from 'images/icons/google.svg';
import GithubhIcon from 'images/icons/github.svg';
import NotificationList from 'containers/App/components/NotificationList';
import { addNotification } from 'containers/App/actions';
import uuid from 'uuid';
import routers from 'utils/routers';
import {
  getErrorSelector,
  getIsLoadingSelector,
  getUserSelector,
} from './selectors';
import {
  handleInputChange,
  handleSubmitLogin,
  handleChangeRemember,
  handleResetLoginForm,
} from './actions';
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

const LoginPreviewPage = ({
  t,
  user,
  dispatchHandleInputChange,
  dispatchHandleSubmitLogin,
  errors,
  dispatchAddNotification,
  isLoading,
  dispatchHandleChangeRemember,
  dispatchHandleResetLoginForm,
}) => {
  useInjectReducer({ key: CONTEXT, reducer });
  useInjectSaga({ key: CONTEXT, saga });
  useEffect(() => () => dispatchHandleResetLoginForm(), []);

  const { email, password } = user;
  const emailError = _get(errors, 'email', '');
  const passwordError = _get(errors, 'password', '');

  const onHandleChange = event => {
    const { name, value } = event.target;
    dispatchHandleInputChange({ [name]: value });
  };

  const onHandleCheckboxChange = event => {
    const { checked } = event.target;
    dispatchHandleChangeRemember(checked);
  };

  const handleCheckDisableButton = () => {
    if (!email || !password) return true;
    return false;
  };

  const onSubmitLogin = () => {
    dispatchHandleSubmitLogin(user);
  };

  const onHandleTestAddNotification = () => {
    dispatchAddNotification({
      id: uuid(),
      title: 'Title Message',
      content: 'description message',
    });
  };

  const renderErrorList = () => {
    if (!_isEmpty(errors)) {
      return Object.keys(errors).map(item => (
        <Alert type="danger" message={errors[item]} key={item} />
      ));
    }
    return null;
  };
  return (
    <LoginPageWrapper>
      {isLoading && <Spinner />}
      <NotificationList />
      <LoginFormWrapper>
        <LoginForm>
          <div className="notification-box">{renderErrorList()}</div>
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
              error={emailError}
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
              error={passwordError}
            />
            <InputCheckbox
              text={t('commons.remember')}
              name="remember"
              onChange={onHandleCheckboxChange}
            />
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
                  onClick={onHandleTestAddNotification}
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
              <Link to={routers.register}>
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
};

const mapStateToProps = createStructuredSelector({
  user: getUserSelector(),
  isLoading: getIsLoadingSelector(),
  errors: getErrorSelector(),
});

const mapDispatchToProps = dispatch => ({
  dispatchHandleInputChange: data => dispatch(handleInputChange(data)),
  dispatchHandleSubmitLogin: data => dispatch(handleSubmitLogin(data)),
  dispatchAddNotification: data => dispatch(addNotification(data)),
  dispatchHandleChangeRemember: data => dispatch(handleChangeRemember(data)),
  dispatchHandleResetLoginForm: () => dispatch(handleResetLoginForm()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

LoginPreviewPage.propTypes = {
  t: PropTypes.func.isRequired,
  user: PropTypes.object,
  dispatchHandleInputChange: PropTypes.func.isRequired,
  dispatchHandleSubmitLogin: PropTypes.func.isRequired,
  errors: PropTypes.object,
  dispatchAddNotification: PropTypes.func,
  isLoading: PropTypes.bool,
  dispatchHandleChangeRemember: PropTypes.func.isRequired,
  dispatchHandleResetLoginForm: PropTypes.func,
};
export default compose(
  withTranslation(),
  withConnect,
)(LoginPreviewPage);
