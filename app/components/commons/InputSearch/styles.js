import styled from 'styled-components';

export const InputSearchWrapper = styled.div`
  border: 1px solid ${props => props.theme.grayPrimary4};
  border-radius: 8px;
  padding: 10px 15px;
  width: 500px;
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.grayPrimary3};
  position: relative;
  justify-content: space-between;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);

  .btn-create {
    flex-shrink: 0;
    color: ${props => props.theme.grayPrimary5};
    font-weight: 400;
    font-size: 20px;
    border: none;
    background-color: ${props => props.theme.grayPrimary3};
    margin-left: 10px;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
`;

export const InputTextWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: flex-start;

  .btn-search {
    border: none;
    background-color: ${props => props.theme.grayPrimary3};
    font-size: 25px;
    color: ${props => props.theme.bluePrimary};
    margin-right: 20px;
    flex-shrink: 0;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }

  .input-search {
    border: none;
    background-color: ${props => props.theme.grayPrimary3};
    flex-grow: 1;
    font-size: 16px;
    &:focus {
      outline: none;
    }

    &:placeholder {
      font-size: 17px;
      color: ${props => props.theme.grayPrimary6};
    }
  }
`;
