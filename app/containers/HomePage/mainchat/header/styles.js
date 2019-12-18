import styled from 'styled-components';

export const HeaderHomeChat = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid red;
  color: red;

  .user-info {
    border: 1px solid;
  }
  button {
    padding: 5px 10px;
    text-align: center;
    border: 1px solid grey;
    cursor: pointer;
  }

  .active {
    background: ${props => props.theme.backgroundColorPrimary};
  }
`;
