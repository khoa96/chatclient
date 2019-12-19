import styled from 'styled-components';

export const SettingButtonWrapper = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${props => props.theme.grayPrimary17};
  position: relative;

  & .setting-icon {
    display: block;
    width: 100%;
    height: 100%;
    background-color: ${props => props.theme.grayPrimary17};
    color: rgba(136, 136, 136, 0.5);
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    transition: all 0.5s ease;
    cursor: pointer;
  }

  &:hover .setting-icon {
    color: white;
    background: ${props => props.theme.backgroundColorPrimary};
  }
`;

export const SettingOptionsWrapper = styled.ul`
  position: absolute;
  top: 100%;
  right: 10px;
  min-width: 200px;
  max-width: 250px;
  list-style: none;
  padding: 15px 15px;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.4);
`;
