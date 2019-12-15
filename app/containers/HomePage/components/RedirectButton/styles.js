/* eslint-disable prettier/prettier */
import styled from 'styled-components';
export const RedirectButtonWrapper = styled.button`
  display: inline-block;
  min-width: 60px;
  padding: 5px 15px;
  border: none;
  border-radius: 5px;
  background-color: white;
  font-size: 12px;
  color: ${props => props.theme.grayPrimary12};
  cursor: pointer;
  &:hover {
    border: 1px solid ${props => props.theme.grayPrimary12};
  }
  &:focus {
    outline: none;
  }
  &.active {
    color: white;
    background: ${props => props.theme.blueMedium3};
    border: none;
  }
`;