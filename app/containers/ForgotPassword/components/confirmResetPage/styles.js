import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const ConfirmResetPasswordWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.backgroundColorPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const ResetPassword = styled.div`
  width: 22%;
  min-width: 350px;
  border: 1px solid white;
  background-color: white;
  padding: 20px 25px 60px 25px;
  border-radius: 5px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  color: ${props => props.theme.grayPrimary8};
  .icon-confirm {
    width: 150px;
    height: 150px;
    border: 1px solid transparent;
    border-radius: 50%;
    margin: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 90px;
    color: white;
    font-weight: bold;
    background: ${props => props.theme.backgroundColorPrimary};
    margin-bottom: 20px;
  }
  .description {
    font-size: 16px;
  }
`;

export const ButtonLinkWrapper = styled(Link)`
  text-decoration: none;
  color: white;
  &:hover {
    color: white;
    text-decoration: none;
  }
`;
