import styled from 'styled-components';

export const NavigationButtonWrapper = styled.div`
  width: 100%;
  height: auto;
  border-top: 1px solid ${props => props.theme.grayPrimary4};
  padding: 20px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: ${props =>
    props.isActive ? props.theme.blueMedium3 : props.theme.grayPrimary12};
  font-weight: 400;
  transition: all 0.5s ease;

  &:hover {
    color: ${props => props.theme.blueMedium3};
    cursor: pointer;
  }

  .icon {
    font-size: 27px;
    position: relative;
    .notifications-count {
      position: absolute;
      right: -15px;
      top: ${props => (props.notificationCount > 20 ? '-10px' : '-5px')};
      display: inline-block;

      background-color: ${props => props.theme.redPrimary3};
      color: white;
      width: ${props => (props.notificationCount > 20 ? '23px' : '20px')};
      height: ${props => (props.notificationCount > 20 ? '23px' : '20px')};
      border-radius: 50%;
      font-size: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .navigation-type {
    font-size: 13px;
  }
`;
