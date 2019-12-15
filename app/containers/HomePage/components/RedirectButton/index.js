/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { RedirectButtonWrapper } from './styles';
function RedirectButton({ t, isActive, text, onClick }) {
  return (
    <RedirectButtonWrapper
      className={isActive ? 'active' : ''}
      onClick={onClick}
    >
      <span>{t(text)}</span>
    </RedirectButtonWrapper>
  );
}

RedirectButton.propTypes = {
  t: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

export default withTranslation()(RedirectButton);
