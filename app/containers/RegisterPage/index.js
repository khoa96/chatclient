import React from 'react';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { CONTEXT } from './constanst';
import reducer from './reducers';
import saga from './saga';
import RegisterPreview from './RegisterPreview';

function RegisterPage() {
  useInjectReducer({ key: CONTEXT, reducer });
  useInjectSaga({ key: CONTEXT, saga });

  return (
    <React.Fragment>
      <RegisterPreview />
    </React.Fragment>
  );
}

const mapStateToProps = createStructuredSelector({});

const withConnect = connect(
  mapStateToProps,
  null,
);

RegisterPage.propTypes = {};

export default compose(
  withTranslation(),
  withConnect,
)(RegisterPage);
