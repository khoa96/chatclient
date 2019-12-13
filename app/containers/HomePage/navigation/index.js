import React from 'react';
import NavigationButton from '../components/NavigationButton';
import { NAVIGATIONS } from './constants';

function Navigation() {
  const handleClickNavigation = type => {
    console.log('navigation type = ', type);
  };

  const renderNavigationList = () =>
    NAVIGATIONS.map(navigation => (
      <NavigationButton
        key={navigation.id}
        classNameIcon={navigation.classNameIcon}
        navigationLabel={navigation.navigationLabel}
        onClick={() => handleClickNavigation(navigation.type)}
      />
    ));

  return <React.Fragment>{renderNavigationList()}</React.Fragment>;
}

Navigation.propTypes = {};

export default Navigation;
