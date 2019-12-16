import styled from 'styled-components';

export const NotificationHistoryWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 10px 0px 0px 10px;
  transition: all 0.5s ease;
  border-top: 1px solid ${props => props.theme.grayPrimary4};
  .icon-user {
    font-size: 20px;
  }

  &.active {
    border-left: 3px solid ${props => props.theme.blueMedium3};
    background-color: ${props => props.theme.grayPrimary9};
  }

  &:hover {
    border-bottom: 2px solid ${props => props.theme.blueMedium3};
    box-shadow: 0 10px 17px rgba(0, 0, 0, 0.3);
    background-color: white;
    cursor: pointer;
  }
`;

export const UserInfoWrapper = styled.div`
  flex-grow: 1;
  height: 100%;
  display: flex;
`;

export const ImageWrapper = styled.div`
  width: 45px;
  height: 100%;
  flex-shrink: 0;
`;

export const NotificationContentWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  max-width: 260px;
  .notification-content {
    font-size: 13px;
    color: ${props => props.theme.darkMedium3};
    font-weight: bold;
    display: block;
    display: -webkit-box;
    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    max-width: 250px;
  }
  .time {
    font-size: 13px;
    color: ${props => props.theme.grayPrimary12};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
  }
`;
