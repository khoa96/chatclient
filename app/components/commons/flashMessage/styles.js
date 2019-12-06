import styled, { keyframes } from 'styled-components';

const NotificationAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
export const FlashMessageWrapper = styled.div`
  width: 440px;
  position: relative;
  background: ${props => props.theme.backgroundColorPrimary};
  color: white;
  font-weight: 600;
  border-radius: 5px;
  padding: 5px 0px 5px 15px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.7);
  z-index: 999;
  margin-bottom: 15px;
  animation: ${NotificationAnimation} 0.8s ease-in-out;
`;

export const FlashMessaage = styled.div`
  display: flex;
  align-items: center;

  .icon-box {
    width: 50px;
    height: 50px;
    border: 1px solid rgba(255, 255, 255, 0.45);
    border-radius: 50%;
    display: flex;
    background-color: rgba(255, 255, 255, 0.45);
    justify-content: center;
    align-items: center;
    font-size: 35px;
    flex-shrink: 0;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    padding: 5px 5px 0px 15px;
    h3 {
      font-size: 16px;
    }
    p {
      margin-top: -5px;
      font-size: 13px;
    }
  }
  .icon-close-click {
    position: absolute;
    top: 5px;
    right: 10px;
    font-size: 30px;
    cursor: pointer;
  }
`;

export const ProcessBar = styled.div`
  border: 1px solid green;
`;
