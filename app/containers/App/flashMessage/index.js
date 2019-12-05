import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { FlashMessageWrapper, FlashMessaage } from './styles';

function FlashMessage({ t }) {
  return (
    <FlashMessageWrapper>
      <FlashMessaage>
        <div className="icon-box">
          <span className="icon-close">
            <i className="ion-md-close" />
          </span>
        </div>
        <div className="content">
          <h3>Title message</h3>
          <p>description messaage</p>
        </div>
        <span className="icon-close-click">
          <i className="ion-md-close-circle-outline" />
        </span>
      </FlashMessaage>
    </FlashMessageWrapper>
  );
}

FlashMessage.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(FlashMessage);
