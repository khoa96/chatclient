/* eslint-disable prettier/prettier */
import styled from 'styled-components';

export const ImageToolTipWrapper = styled.div`
  display: table;
  position: relative;
  cursor: pointer;
  &:hover .tooltip-text {
    display: block;
  }
  img {
    display: block;
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  p.tooltip-text {
    display: none;
    background-color: rgba(0, 0, 0, 0.7);
    min-width: 120px;
    color: white;
    text-align: center;
    border-radius: 6px;
    padding: 5px 8px;
    font-size: 13px;

    /* Position the tooltip */
    position: absolute;
    z-index: 999;
    bottom: 90%;
    left: 50%;
    margin-left: -60px;
  }
  p.tooltip-text:before {
    position: absolute;
    top: 100%;
    left: 40%;
    content: '';
    width: 0;
    height: 0;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
    border-top: 6px solid rgba(0, 0, 0, 0.7);
  }
  span.status {
    display: inline-block;
    width: 15px;
    height: 15px;
    background-color: ${props => props.isOnline ? props.theme.greenPrimary4 : props.theme.grayPrimary13};
    border: 1px solid transparent;
    border-radius: 50%;
    position: absolute;
    right: 0;
    bottom: 0;
  }
`;
