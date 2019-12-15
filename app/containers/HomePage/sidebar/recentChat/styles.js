/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const RecentChatSidebarWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

export const HeaderRecentChatWrapper = styled.div`
  width: 100%;
  min-height: 210px;
  max-height: 220px;
  .user {
    display: flex;
    align-items: center;
    .user-info {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
      .username {
        font-family: 'Open-Sans-bold';
        font-size: 16px;
        font-weight: bold;
        &:hover {
          color: ${props => props.theme.blueMedium3};
          cursor: pointer;
        }
      }
      .status {
        font-size: 12px;
        color: ${props => props.theme.grayPrimary12};
        margin-top: -3px;
      }
    }
  }
  .search {
    margin-top: 15px;
    margin-bottom: 25px;
  }
  .btn-add {
    display: flex;
    margin-top: 10px;
    justify-content: space-between;
    align-items: flex-end;
    .title {
      font-size: 14px;
      margin-top: 10px;
      color: ${props => props.theme.grayPrimary12};
    }
  }
`;
export const BodyRecentChatWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 220px);
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  overflow: auto;

  /* width */
  ::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${props => props.theme.grayPrimary2};
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.grayPrimary14};
    border-radius: 10px;
  }

`;
