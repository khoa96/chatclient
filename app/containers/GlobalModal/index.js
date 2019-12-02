import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { useInjectReducer } from 'utils/injectReducer';
import { createStructuredSelector } from 'reselect';
import reducer from './reducers';
import { CONTEXT } from './constanst';
import { getIsShowModalSelector } from './selectors';
import {
  GlobalModalWrapper,
  GlobalModalBoxWrapper,
  GlobalModalMainContentWrapper,
} from './styles';
import { toggleModal } from './actions';

function GlobalModal({
  isShowModal,
  dispatchToggleModal,
  children,
  width,
  height,
}) {
  useInjectReducer({ key: CONTEXT, reducer });
  useEffect(() => {
    document.addEventListener('keydown', handlePressEsc);
    return () => {
      document.removeEventListener('keydown', handlePressEsc);
    };
  });

  const handleToggleModal = () => {
    dispatchToggleModal();
  };

  const handlePressEsc = e => {
    if (e.key === 'Escape' && isShowModal) {
      dispatchToggleModal();
    }
  };

  return (
    <React.Fragment>
      {isShowModal && (
        <GlobalModalWrapper>
          <GlobalModalBoxWrapper width={width} height={height}>
            <GlobalModalMainContentWrapper>
              {children}
            </GlobalModalMainContentWrapper>
            <span
              className="close-icon"
              role="presentation"
              onClick={handleToggleModal}
            >
              <i className="ion-md-close-circle-outline" />
            </span>
          </GlobalModalBoxWrapper>
        </GlobalModalWrapper>
      )}
    </React.Fragment>
  );
}

const mapStateToProps = createStructuredSelector({
  isShowModal: getIsShowModalSelector(),
});

const mapDispatchToProps = dispatch => ({
  dispatchToggleModal: () => dispatch(toggleModal()),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

GlobalModal.propTypes = {
  isShowModal: PropTypes.bool,
  dispatchToggleModal: PropTypes.func,
  children: PropTypes.any,
  width: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
};

export default compose(
  withTranslation(),
  withConnect,
)(GlobalModal);
