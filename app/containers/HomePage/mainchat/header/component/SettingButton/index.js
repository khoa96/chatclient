import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { SettingButtonWrapper, SettingOptionsWrapper } from './styles';

function SettingButton({ t }) {
  return (
    <SettingButtonWrapper>
      <span className="setting-icon">
        <i className="ion-md-call" />
      </span>
      <SettingOptionsWrapper>setting option</SettingOptionsWrapper>
    </SettingButtonWrapper>
  );
}

SettingButton.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation()(SettingButton);
