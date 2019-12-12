import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

function NavigationButton() {
  return(
    <div> navigation button</div>
  )
}

NavigationButton.propTypes = {
  t: PropTypes.func.isRequired,
};

export default NavigationButton;
