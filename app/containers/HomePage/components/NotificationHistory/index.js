import React from 'react';
import PropTypes from 'prop-types';
import ImageToolTip from '../ImageTooltip';
import {
  NotificationHistoryWrapper,
  UserInfoWrapper,
  ImageWrapper,
  NotificationContentWrapper,
} from './styles';

function MessageHistory({
  username,
  notificationContent,
  time,
  isActice,
  image,
  isUserOnline,
}) {
  return (
    <NotificationHistoryWrapper className={isActice ? 'active' : ''}>
      <UserInfoWrapper>
        <ImageWrapper>
          <ImageToolTip
            image={image}
            content={username}
            isOnline={isUserOnline}
          />
        </ImageWrapper>
        <NotificationContentWrapper>
          <span className="notification-content">{notificationContent}</span>
          <p className="time">{time}</p>
        </NotificationContentWrapper>
      </UserInfoWrapper>
    </NotificationHistoryWrapper>
  );
}

MessageHistory.propTypes = {
  username: PropTypes.string.isRequired,
  notificationContent: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  isActice: PropTypes.bool,
  image: PropTypes.any,
  isUserOnline: PropTypes.bool,
};

export default MessageHistory;
