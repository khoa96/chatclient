import styled from 'styled-components';

export const InputWrapper = styled.label`
  margin: 10px;
  &.container {
    display: block;
    position: relative;
    padding-left: 30px;
    margin-bottom: 12px;
    color: grey;
    font-size: 14px;
    line-height: 21px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
  }

  /* Hide the browser's default checkbox */
  &.container input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
  }
  /* input disabled */
  &.container input:disabled ~ .checkmark {
    border: 1px solid ${props => props.theme.grayMedium3};
    background-color: ${props => props.theme.grayMedium4};
    cursor: not-allowed;
  }

  /* Create a custom checkbox */
  .checkmark {
    position: absolute;
    top: -1px;
    left: 0;
    height: 20px;
    width: 20px;
    border: 1px solid ${props => props.theme.blueMedium1};
    background-color: ${props => props.theme.whitePrimary};
  }

  /* When the checkbox is checked, add a blue background */
  &.container input:checked ~ .checkmark {
    background: ${props => props.theme.backgroundColorPrimary};
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Create the checkmark/indicator (hidden when not checked) */
  .checkmark:after {
    content: '';
    position: absolute;
    top: 3px;
    left: 45%;
  }

  /* Show the checkmark when checked */
  &.container input:checked ~ .checkmark:after {
    display: block;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  /* Style the checkmark/indicator */
  &.container .checkmark:after {
    width: 4px;
    height: 10px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
