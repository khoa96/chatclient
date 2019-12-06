import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { FlashMessageWrapper, FlashMessaage } from './styles';

function FlashMessage({ notification, handleDelete }) {
  useEffect(() => {
    setTimeout(() => {
      handleDelete(notification.id);
    }, 5000);
  }, []);

  const handleToggleNofication = id => {
    handleDelete(id);
  };

  return (
    <FlashMessageWrapper>
      <FlashMessaage>
        <div className="icon-box">
          <span className="icon-close">
            <i className="ion-md-notifications-outline" />
          </span>
        </div>
        <div className="content">
          <h3>{notification.title}</h3>
          <p>{notification.content}</p>
        </div>
        <span
          className="icon-close-click"
          role="presentation"
          onClick={() => handleToggleNofication(notification.id)}
        >
          <i className="ion-md-close-circle-outline" />
        </span>
      </FlashMessaage>
    </FlashMessageWrapper>
  );
}

FlashMessage.propTypes = {
  notification: PropTypes.object.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default withTranslation()(FlashMessage);
