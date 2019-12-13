import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { NavigationButtonWrapper } from './styles';

function NavigationButton({
  t,
  classNameIcon,
  navigationLabel,
  onClick,
  type,
  isActive,
}) {
  return (
    <NavigationButtonWrapper onClick={() => onClick(type)} isActive={isActive}>
      <span className="icon">
        <i className={classNameIcon} />
      </span>
      <span className="navigation-type">{t(navigationLabel)}</span>
    </NavigationButtonWrapper>
  );
}

NavigationButton.propTypes = {
  t: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  classNameIcon: PropTypes.string.isRequired,
  navigationLabel: PropTypes.string,
  onClick: PropTypes.func,
  isActive: PropTypes.bool,
};

export default withTranslation()(NavigationButton);
