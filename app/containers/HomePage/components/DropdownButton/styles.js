/* eslint-disable prettier/prettier */
import styled from 'styled-components';
export const DropdownButtonWrapper = styled.div`
  display: inline-block;
  position: relative;
  .btn  {
    padding: 6px 20px;
    border: 1px solid ${props => props.theme.grayPrimary2};
    border-radius: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    font-size: 13px;
    color: ${props => props.theme.grayPrimary12};
    cursor: pointer;
    &:focus {
        outline: none;
    }
  }
`;

export const ContentWrapper = styled.ul`
  min-width: 200px;
  max-width: 250px;
  list-style: none;
  padding: 15px 15px;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
  position: absolute;
  left: 20px;
  z-index: 9999;
  .list-item {
      font-size: 13px;
      color: ${props => props.theme.grayPrimary8};
      padding: 10px;
      transition: all 0.5s ease;
      &:hover {
        background: ${props => props.theme.backgroundColorPrimary};
        color: white;
        border-radius: 5px;
        cursor: pointer;
      }
  }
`;