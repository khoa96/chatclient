import React from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/get';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import NavigationButton from '../components/NavigationButton';
import { NAVIGATIONS } from './constants';
import { getNavigationType } from '../selector';
import { handleChangeNavigationTypes } from '../action';

function Navigation({ dispatchHandleChangeNavigationType }) {
  const handleClickNavigation = type => {
    dispatchHandleChangeNavigationType(type);
  };

  const renderNavigationList = () =>
    NAVIGATIONS.map(navigation => (
      <NavigationButton
        key={navigation.id}
        classNameIcon={navigation.classNameIcon}
        navigationLabel={navigation.navigationLabel}
        notificationCount={_get(navigation, 'notificationCount', null)}
        onClick={() => handleClickNavigation(navigation.type)}
      />
    ));

  return <React.Fragment>{renderNavigationList()}</React.Fragment>;
}

const mapStateToProps = createStructuredSelector({
  navigationType: getNavigationType(),
});

const mapDispatchToProps = dispatch => ({
  dispatchHandleChangeNavigationType: data =>
    dispatch(handleChangeNavigationTypes(data)),
});

Navigation.propTypes = {
  dispatchHandleChangeNavigationType: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Navigation);
