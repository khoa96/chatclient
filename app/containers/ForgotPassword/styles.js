import styled from 'styled-components';

export const ForgotPasswordWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.backgroundColorPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ForgotPasswordForm = styled.div`
  border: 1px solid white;
  width: 25%;
  min-width: 400px;
  min-height: 300px;
  background-color: ${props => props.theme.whitePrimary};
  text-align: center;
  padding: 20px 25px 60px 25px;
`;
