import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import InputText from 'components/commons/InputText';
import Button from 'components/commons/Button';
import { ForgotPasswordWrapper, ForgotPasswordForm } from './styles';

function ForgotPassword({ t }) {
  return (
    <ForgotPasswordWrapper>
      <ForgotPasswordForm>
        <h2>Forgot Password</h2>
        <p>
          Talkshak is a simplest and friendly interface Messagner or plateform.
        </p>
        <InputText
          type="text"
          placeholder="email address..."
          iconClassName="ion-md-mail"
        />
        <Button context="primary" onClick={() => {}}>
          Reset Password
        </Button>
      </ForgotPasswordForm>
    </ForgotPasswordWrapper>
  );
}

ForgotPassword.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(ForgotPassword);
