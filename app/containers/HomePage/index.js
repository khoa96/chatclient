import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { CONTEXT } from './constants';
import reducer from './reducers';
import MainLayoutPage from './MaiLayoutPage';

function HomePage({ t }) {
  useInjectReducer({ key: CONTEXT, reducer });
  return (
    <React.Fragment>
      <MainLayoutPage />
    </React.Fragment>
  );
}

HomePage.propTypes = {
  t: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({});
const mapDispatchToProps = dispatch => ({});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withTranslation(),
  withConnect,
)(HomePage);
