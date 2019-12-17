import styled from 'styled-components';

export const UploadFileButtonWrappeer = styled.div`
  position: relative;
  width: 100%;
  .input-file-trigger {
    display: block;
    max-width: 150px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    padding: 12px 25px;
    font-size: 14px;
    background: ${props => props.theme.backgroundColorPrimary};
    color: white;
    text-align: center;
    border-radius: 6px;
    transition: all 0.4s ease;
    cursor: pointer;
  }
  .input-file {
    position: absolute;
    opacity: 0;
    width: 100;
    top: 0;
    left: 0;
    padding: 15px 0px;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
`;
