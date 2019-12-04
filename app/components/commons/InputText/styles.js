/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const InputTextWrapper = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 15px;
    justify-content: space-between;
    align-items: center;
    border-radius: 8px;
    background-color: white;
    box-shadow: 0 6px 17px rgba(0, 0, 0, 0.1);
    position: relative;
    .input-icon {
      position: absolute;
      right: 15px;
      top: 8px;
      flex-shirk: 0;
      font-size: 20px;
      color: ${props => props.theme.grayPrimary2};
    }
`;

export const InputWrapper = styled.input`
    flex-grow: 1;
    border: ${props => props.error ? '1px solid red' : 'none'};
    padding: 13px 45px 13px 20px;
    background-color: white;
    border-radius: 6px;
    &:focus {
        outline: none;
        border-width: 1px;
        border-style: solid;
        border-color: ${props => props.error ? 'red' : props.theme.blueMedium1};
    }
    &::placeholder {
        color: ${props => props.theme.grayPrimary2};
        font-size: 16px;
        font-weight: 200;
    }
    &:focus {
        background: white;
        -webkit-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        -moz-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        -ms-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        -o-box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
         box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
    }
`;
