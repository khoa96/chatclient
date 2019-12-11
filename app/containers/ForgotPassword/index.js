import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { withTranslation } from 'react-i18next';
import InputText from 'components/commons/InputText';
import Button from 'components/commons/Button';
import Alert from 'components/commons/Alert';
import changePasswordImage from 'images/change_password.png';
import { Link } from 'react-router-dom';
import routers from 'utils/routers';
import { CHECK_EMAIL_VALIDATION } from 'utils/constants';
import Spinner from 'components/commons/Spinner';
import { ForgotPasswordWrapper, ForgotPasswordForm } from './styles';
import reducer from './reducers';
import saga from './saga';
import { CONTEXT } from './constants';
import { getIsLoadingSelector, getErrorSelector } from './selectors';
import { handleSubmitChangePassword } from './actions';

function ForgotPassword({
  t,
  isLoading,
  dispatchHandleChangePassword,
  errorMessage,
}) {
  useInjectReducer({ key: CONTEXT, reducer });
  useInjectSaga({ key: CONTEXT, saga });
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);

  const handleInputChange = event => {
    const { value } = event.target;
    setEmail(value);
    if (!CHECK_EMAIL_VALIDATION.test(value)) {
      setError(true);
    } else {
      setError(false);
    }
  };

  const handleCheckDisableButton = () => {
    if (!email) return true;
    if (error) return true;
    return false;
  };

  const onHandleSubmit = () => {
    if (email) {
      dispatchHandleChangePassword(email);
    }
  };

  return (
    <ForgotPasswordWrapper>
      {isLoading && <Spinner />}
      <ForgotPasswordForm>
        {errorMessage && <Alert type="danger" message={errorMessage} />}
        <img src={changePasswordImage} alt="" />
        <h2>{t('forgotPassword.titleForgotPassword')}</h2>
        <p>{t('forgotPassword.beforeDescription')}</p>
        <InputText
          type="text"
          placeholder="signin.emailPlaceholder"
          name="email"
          iconClassName="ion-md-mail"
          isShowIcon
          isRequired
          onChange={handleInputChange}
          value={email}
          error={error}
        />
        <Button
          context="primary"
          onClick={onHandleSubmit}
          disabled={handleCheckDisableButton()}
        >
          {t('forgotPassword.resetPasswordLabelButton')}
        </Button>
        <div className="comeback-login">
          <Link to={routers.login}>
            <Button context="link">
              {t('forgotPassword.goBackToLoginLable')}
            </Button>
          </Link>
        </div>
      </ForgotPasswordForm>
    </ForgotPasswordWrapper>
  );
}

const mapStateToProps = createStructuredSelector({
  isLoading: getIsLoadingSelector(),
  errorMessage: getErrorSelector(),
});
const mapDispatchToProps = dispatch => ({
  dispatchHandleChangePassword: data =>
    dispatch(handleSubmitChangePassword(data)),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

ForgotPassword.propTypes = {
  t: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  dispatchHandleChangePassword: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

export default compose(
  withTranslation(),
  withConnect,
)(ForgotPassword);
