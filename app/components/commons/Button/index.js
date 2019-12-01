import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './styles';

function Button({ children, onClick, context, type }) {
  return (
    <ButtonWrapper context={context} onClick={onClick} type={type}>
      {children}
    </ButtonWrapper>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  type: PropTypes.string,
  context: PropTypes.string.isRequired, // is one of primary, link, circle
  onClick: PropTypes.func.isRequired,
};

export default withTranslation()(Button);
