import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './styles';

function Button({ children, onClick, context, type, disabled, className }) {
  return (
    <ButtonWrapper
      context={context}
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={className}
    >
      {children}
    </ButtonWrapper>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  context: PropTypes.string.isRequired, // is one of primary, link, circle
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default withTranslation()(Button);
