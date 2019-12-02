import styled, { keyframes } from 'styled-components';

export const GlobalModalWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.35);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const modalAnimation = keyframes`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1);
  }

  50% {
    opacity: 1;
  }
}
`;

export const GlobalModalBoxWrapper = styled.div`
  width: ${props => props.width};
  height: ${props => props.height};
  border: 1px solid ${props => props.theme.grayPrimary4};
  background-color: white;
  padding: 20px 20px 15px 20px;
  border-radius: 6px;
  position: relative;
  animation: ${modalAnimation} 0.8s ease-in-out;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.8);

  .close-icon {
    position: absolute;
    right: 10px;
    top: 0px;
    font-size: 30px;
    color: ${props => props.theme.grayPrimary};
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
`;

export const GlobalModalMainContentWrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  max-height: 500px;
  padding: 10px;
  overflow: auto;

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
    border-radius: 2px;
  }
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
    background-color: white;
  }
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 20px;
    -webkit-box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
    background-color: ${props => props.theme.grayMedium4};
  }
`;
