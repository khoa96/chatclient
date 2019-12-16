import styled from 'styled-components';

export const SettingItemWrapper = styled.div`
  width: 100%;
  position: relative;
`;

export const HeaderSettingItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 5px 15px 10px;
  border-bottom: 1px solid ${props => props.theme.grayPrimary4};
  &:hover {
    cursor: pointer;
    .main-content {
      .setting-icon {
        color: ${props => props.theme.blueMedium3};
      }
    }
    .arrow-icon {
      color: ${props => props.theme.blueMedium3};
    }
  }
  .main-content {
    flex-grow: 1;
    justify-content: center;
    display: flex;
    .setting-icon {
      font-size: 20px;
      color: ${props => props.theme.grayPrimary4};
      flex-shrink: 0;
      margin-right: 15px;
      margin-top: 5px;
      &:hover {
        color: ${props => props.theme.blueMedium3};
        cursor: pointer;
      }
    }
    .setting-content {
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      .setting-title {
        font-size: 14px;
        color: ${props => props.theme.darkMedium1};
        font-family: 'Open-Sans-bold';
      }
      .setting-description {
        font-size: 13px;
        font-weight: 400;
        color: ${props => props.theme.grayPrimary12};
      }
    }
  }
  .arrow-icon {
    font-size: 20px;
    color: ${props => props.theme.grayPrimary12};
    flex-shrink: 0;
    min-width: 20px;
    &:hover {
      cursor: pointer;
      color: ${props => props.theme.blueMedium3};
    }
  }
`;
export const ContentSettingItem = styled.div`
  width: 100%;
  height: 400px;
  &.panel-collapse {
    max-height: 600px;
    overflow-y: auto;
    overflow-x: hidden;
    transition: max-height 1s ease-out;
  }
  &.panel-close {
    max-height: 0;
    transition: max-height 0.8s ease-in;
  }
`;
