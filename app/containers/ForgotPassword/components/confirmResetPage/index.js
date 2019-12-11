import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Button from 'components/commons/Button';
import routers from 'utils/routers';
import {
  ConfirmResetPasswordWrapper,
  ResetPassword,
  ButtonLinkWrapper,
} from './styles';

function ConfirmResetPassword({ t }) {
  return (
    <ConfirmResetPasswordWrapper>
      <ResetPassword>
        <p className="icon-confirm">
          <span>
            <i className="ion-md-done-all" />
          </span>
        </p>
        <h3>{t('forgotPassword.checkEmail')}</h3>
        <p className="description">{t('forgotPassword.afterDescription')}</p>
        <Button context="primary" onClick={null}>
          <ButtonLinkWrapper to={routers.login}>
            {t('forgotPassword.goToLogin')}
          </ButtonLinkWrapper>
        </Button>
      </ResetPassword>
    </ConfirmResetPasswordWrapper>
  );
}

ConfirmResetPassword.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(ConfirmResetPassword);
