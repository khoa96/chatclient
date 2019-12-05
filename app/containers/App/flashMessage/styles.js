import styled from 'styled-components';

export const FlashMessageWrapper = styled.div`
  width: 400px;
  border: 1px solid;
  position: absolute;
  left: 10px;
  bottom: 30px;
  color: gray;
  background-color: white;
  border-radius: 5px;
  padding: 5px 0px 5px 15px;
`;

export const FlashMessaage = styled.div`
  display: flex;
  align-items: center;

  .icon-box {
    width: 50px;
    height: 50px;
    border: 1px solid;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 35px;
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    padding-top: 10px;
    padding-left: 20px;

    h3 {
      font-size: 18px;
    }
    p {
      margin-top: -5px;
    }
  }
  .icon-close-click {
    position: absolute;
    top: 5px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
  }
`;

export const ProcessBar = styled.div`
  border: 1px solid green;

`;
