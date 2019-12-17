import styled from 'styled-components';

export const InputTextWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  .input-group {
    display: flex;
    flex-direction: column;
    .input-label {
      font-size: 13px;
      font-weight: bold;
      font-family: 'Open-Sans-bold';
      color: ${props => props.theme.darkMedium4};

      .input-required {
        color: red;
        margin-left: 5px;
      }
    }
    .input-text {
      display: inline-block;
      width: 100%;
      padding: 15px 15px;
      font-size: 13px;
      color: ${props => props.theme.grayPrimary16};
      font-weight: 400;
      background-color: white;
      border-radius: 6px;
      box-shadow: 0 6px 17px rgba(0, 0, 0, 0.1);
      border: ${props => (props.error ? '1px solid red' : 'none')};
      &:focus {
        outline: none;
      }
    }
  }
  .error {
    font-size: 12px;
    color: red;
    margin-top: 3px;
    margin-left: 5px;
  }
`;
