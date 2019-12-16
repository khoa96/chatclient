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
      <TimeWrapper>
        {type === 'friends' ? (
          <span className="icon-user">
            <i className="ion-md-person" />
          </span>
        ) : (
          <span>{time}</span>
        )}
      </TimeWrapper>
    </MessageHistoryWrapper>
  );
}

MessageHistory.propTypes = {
  // type is one of [friends, messages, notifications]
  type: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  time: PropTypes.string,
  isActice: PropTypes.bool,
  image: PropTypes.any,
  isUserOnline: PropTypes.bool,
};

export default MessageHistory;
