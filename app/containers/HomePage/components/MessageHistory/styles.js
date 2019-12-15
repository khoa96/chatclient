import styled from 'styled-components';

export const MessageHistoryWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 16px 5px 10px 10px;
  transition: all 0.5s ease;
  border-top: 1px solid ${props => props.theme.grayPrimary4};

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

export const MessageContentWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  padding-left: 15px;
  display: flex;
  flex-direction: column;
  max-width: 200px;
  .username {
    font-size: 14px;
    color: ${props => props.theme.darkMedium1};
    font-weight: bold;
    display: inline-block;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }
  .messages {
    font-size: 13px;
    color: ${props => props.theme.grayPrimary12};
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    display: inline-block;
  }
`;

export const TimeWrapper = styled.div`
  min-width: 40px;
  max-width: 50px;
  flex-shrink: 0;
  font-size: 12px;
  color: ${props => props.theme.grayPrimary12};
  margin-top: 5px;
`;
