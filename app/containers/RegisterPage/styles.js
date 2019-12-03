import styled from 'styled-components';
export const RegisterPageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: ${props => props.theme.backgroundColorPrimary};
  color: ${props => props.theme.whitePrimary};
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const RegisterFormWrapper = styled.div`
  width: 40%;
  display: flex;
  justify-content: flex-end;
`;

export const RegisterForm = styled.div`
  min-width: 400px;
  border-radius: 3px;
  background-color: ${props => props.theme.whitePrimary};
  flex-shrink: 0;
  padding: 30px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);

  .login-form-header {
    width: 100%;
    background: ${props => props.theme.backgroundColorPrimary};
    text-align: center;
    color: ${props => props.theme.whitePrimary};
    padding: 20px 30px 70px;
    span {
      text-transform: uppercase;
      font-size: 18px;
    }
  }
`;

export const FormBodyWrapper = styled.div`
  width: 90%;
  margin: auto;
  min-height: 200px;
  background-color: ${props => props.theme.whitePrimary};
  margin-top: -25px;
  border-radius: 5px;
  padding: 20px 15px;
  .confirm {
    display: flex;
    span {
      color: ${props => props.theme.darkPrimary};
      font-size: 14px;
      font-weight: 600;
      margin-right: 5px;
    }
  }
`;

export const ListContactWrapper = styled.div`
  margin: 30px 0px;
  margin-bottom: 20px;
  .title-list-contact {
    color: ${props => props.theme.darkPrimary};
    font-size: 14px;
    font-weight: 600;
  }
  .list-contact {
    margin-top: 10px;
    display: flex;
    .btn-contact {
      margin-right: 15px;
    }
  }
`;
export const IntroduceWrapper = styled.div`
  width: 60%;
  display: flex;
  padding-right: 150px;
  flex-direction: column;
  justify-content: center;
  padding-left: 60px;

  .title-introduce {
    font-size: 40px;
    line-height: 1.2;
  }

  .action-introduce {
    font-size: 20px;
    text-transform: capitalize;
    margin-top: 20px;
  }
`;
