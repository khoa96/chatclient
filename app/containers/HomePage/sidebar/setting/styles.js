import styled from 'styled-components';
export const SettingPreviewWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .setting-title {
    font-size: 14px;
    color: ${props => props.theme.grayPrimary11};
    margin: 0;
    padding: 0;
  }
`;

export const HeaderSettingPreviewWrapper = styled.div`
  width: 100%;
  min-height: 150px;
  max-height: 180px;
  padding-top: 10px;
  padding-bottom: 40px;
  .user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30px;

    .username {
      display: inline-block;
      margin: 10px 0px 5px 0px;
      font-size: 18px;
      font-weight: 700;
      color: black;
      font-family: 'Open-Sans-super-bold';

      &:hover {
        color: ${props => props.theme.blueMedium3};
        cursor: pointer;
      }
    }
    .address {
      font-size: 15px;
      color: ${props => props.theme.grayPrimary12};
      font-weight: 400;
      overflow: auto;
    }
  }
`;

export const BodySettingPreviewWrapper = styled.div`
  flex-grow: 1;
  width: 100%;
  margin-top: 10px;
  overflow: auto;
  /* width */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: ${props => props.theme.grayPrimary15};
    border-radius: 8px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${props => props.theme.grayPrimary2};
    border-radius: 8px;
  }
`;
