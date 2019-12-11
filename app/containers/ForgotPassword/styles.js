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
  width: 22%;
  min-width: 400px;
  min-height: 300px;
  background-color: ${props => props.theme.whitePrimary};
  text-align: center;
  padding: 20px 25px 60px 25px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  color: ${props => props.theme.grayPrimary8};

  img {
    display: block;
    width: 250px;
    height: 250px;
    margin: auto;
  }
  h2 {
    font-size: 26px;
    font-weight: bold;
  }
  p {
    font-size: 16px;
  }
  .comeback-login {
    margin-top: 10px;
  }
`;
