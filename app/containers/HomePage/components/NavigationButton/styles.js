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
  }

  .navigation-type {
    font-size: 13px;
  }
`;
