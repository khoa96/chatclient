import React from 'react';
import PropTypes from 'prop-types';
import ImageToolTip from '../ImageTooltip';
import {
  MessageHistoryWrapper,
  UserInfoWrapper,
  TimeWrapper,
  ImageWrapper,
  MessageContentWrapper,
} from './styles';

function MessageHistory({
  type,
  username,
  content,
  classNameIcon,
  time,
  isActice,
  image,
  isUserOnline,
}) {
  return (
    <MessageHistoryWrapper className={isActice ? 'active' : ''}>
      <UserInfoWrapper>
        <ImageWrapper>
          <ImageToolTip
            image={image}
            content={username}
            isOnline={isUserOnline}
          />
        </ImageWrapper>
        <MessageContentWrapper>
          <span className="username">{username}</span>
          <p className="messages">{content}</p>
        </MessageContentWrapper>
      </UserInfoWrapper>
      <TimeWrapper>{time}</TimeWrapper>
    </MessageHistoryWrapper>
  );
}

MessageHistory.propTypes = {
  type: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  classNameIcon: PropTypes.string,
  time: PropTypes.string,
  isActice: PropTypes.bool,
  image: PropTypes.any,
  isUserOnline: PropTypes.bool,
};

export default MessageHistory;
