import styled from 'styled-components';

export const HeaderHomeChat = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px;
  background-color: white;
  border: 1px solid gray;

  .user-info {
    display: flex;
    flex-direction: column;
    margin: 0;

    .username {
      font-size: 18px;
      font-family: 'Open-Sans-bold';
      transition: all 0.4s ease;
      cursor: pointer;
      &:hover {
        color: ${props => props.theme.blueMedium3};
      }
    }

    .status-user {
      font-size: 12px;
      color: ${props => props.theme.grayPrimary12};
    }
  }
  .option-chat {
    min-width: 180px;
    flex-shrink: 0;
    display: flex;
  }
`;

export const ChatCallButtonWrapper = styled.button`
  display: inline-block;
  width: 40px;
  height: 40px;
  display: flex;
  border: 1px solid ${props => props.theme.grayPrimary17};
  border-radius: 50%;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.grayPrimary17};
  color: rgba(136, 136, 136, 0.5);
  font-size: 18px;
  transition: all 0.5s ease;
  margin: 10px;

  &:focus {
    outline: none;
  }

  &:hover {
    color: white;
    background: ${props => props.theme.backgroundColorPrimary};
  }
`;
