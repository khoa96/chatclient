import React from 'react';
import PropTypes from 'prop-types';
import _isEmpty from 'lodash/isEmpty';
import _get from 'lodash/get';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Link } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import Alert from 'components/commons/Alert';
import InputText from 'components/commons/InputText';
import InputCheckbox from 'components/commons/InputCheckbox';
import Button from 'components/commons/Button';
import InputPassword from 'components/commons/InputPassword';
import FlashMessage from 'containers/App/flashMessage';
import FacebookIcon from 'images/icons/facebook.svg';
import GoogleIcon from 'images/icons/google.svg';
import GithubhIcon from 'images/icons/github.svg';
import { getUserRegisterSelector, getErrorSelector } from './selectors';
import { handleChangeUser, handleSubmitRegisterUser } from './actions';
import {
  RegisterPageWrapper,
  RegisterFormWrapper,
  IntroduceWrapper,
  RegisterForm,
  FormBodyWrapper,
  ListContactWrapper,
} from './styles';

function RegisterPreviewPage({
  t,
  user,
  dispatchHandleChangeUser,
  dispatchHandleSubmitRegisterUser,
  error,
}) {
  const { username, email, password } = user;
  const usernameError = _get(error, 'username', '');
  const passwordError = _get(error, 'password', '');
  const emailError = _get(error, 'email', '');

  const onChangeUser = event => {
    const { name, value } = event.target;
    dispatchHandleChangeUser({ [name]: value });
  };

  const onSubmitRegister = () => {
    dispatchHandleSubmitRegisterUser(user);
  };

  const handleCheckButtonStatus = () => {
    if (username && email && password) return false;
    return true;
  };

  const renderListError = () => {
    if (!_isEmpty(error)) {
      return Object.keys(error).map((item, index) => (
        <Alert type="danger" message={error[item]} key={`${item}-${index}`} />
      ));
    }
    return null;
  };

  return (
    <RegisterPageWrapper>
      <FlashMessage />
      <RegisterFormWrapper>
        <RegisterForm>
          <div className="notification-box">{renderListError()}</div>
          <div className="login-form-header">
            <span>{t('signup.signupTitle')}</span>
          </div>
          <FormBodyWrapper>
            <InputText
              placeholder="signup.usernamePlaceholder"
              name="username"
              type="text"
              iconClassName="ion-md-person"
              isShowIcon
              isRequired
              onChange={onChangeUser}
              value={username}
              error={usernameError}
            />
            <InputText
              placeholder="signup.emailPlaceholder"
              name="email"
              type="text"
              iconClassName="ion-md-mail"
              isShowIcon
              isRequired
              onChange={onChangeUser}
              value={email}
              error={emailError}
            />
            <InputPassword
              placeholder="signup.passwordPlaceholder"
              name="password"
              type="password"
              iconClassName="ion-md-lock"
              isShowIcon
              isRequired
              onChange={onChangeUser}
              value={password}
              error={passwordError}
            />
            <InputCheckbox text={t('commons.remember')} name="remember" />
            <Button
              context="primary"
              onClick={onSubmitRegister}
              disabled={handleCheckButtonStatus()}
            >
              {t('signup.signupTitle')}
            </Button>
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
              <Link to="/login">
                <Button context="link">{t('signup.clickHere')}</Button>
              </Link>
            </p>
          </FormBodyWrapper>
        </RegisterForm>
      </RegisterFormWrapper>
      <IntroduceWrapper>
        <h2 className="title-introduce">{t('signup.introduce')}</h2>
        <h4 className="action-introduce">{t('signup.action')}</h4>
      </IntroduceWrapper>
    </RegisterPageWrapper>
  );
}

const mapStateToProps = createStructuredSelector({
  user: getUserRegisterSelector(),
  error: getErrorSelector(),
});

const mapDispatchToProps = dispatch => ({
  dispatchHandleChangeUser: data => dispatch(handleChangeUser(data)),
  dispatchHandleSubmitRegisterUser: data =>
    dispatch(handleSubmitRegisterUser(data)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

RegisterPreviewPage.propTypes = {
  t: PropTypes.func.isRequired,
  user: PropTypes.object,
  dispatchHandleChangeUser: PropTypes.func,
  dispatchHandleSubmitRegisterUser: PropTypes.func,
  error: PropTypes.object,
};

RegisterPreviewPage.defaultProps = {
  user: {},
};

export default compose(
  withTranslation(),
  withConnect,
)(RegisterPreviewPage);
