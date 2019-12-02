import styled from 'styled-components';
export const LoginPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.backgroundColorPrimary};
  color: ${props => props.theme.whitePrimary};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const LoginFormWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
`;

export const LoginForm = styled.div`
  min-width: 360px;
  min-height: 630px;
  border: 1px solid white;
  flex-shrink: 0;
  padding: 60px;
`;

export const IntroduceWrapper = styled.div`
  width: 60%;
  display: flex;
  padding-right: 400px;
  flex-direction: column;
  justify-content: center;
  padding-left: 60px;

  .title-introduce {
    font-size: 45px;
    line-height: 1.2;
  }

  .action-introduce {
    font-size: 20px;
    text-transform: capitalize;
    margin-top: 20px;
  }
`;
