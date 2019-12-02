import styled from 'styled-components';

const buttonPrimary = color => `
  width: 100%;
  background: ${color};
  border-radius: 6px;
  padding: 10px 20px;
`;

const buttonLink = color => `
  border: none;
  padding: 0;
  border-bottom: 1px solid;
  color: ${color};
  background: white;
`;

const renderBackgroundColorCircleButton = props => {
  const {
    type,
    theme: {
      facebookIconBackground,
      twiterIconBackground,
      googleIconBackground,
    },
  } = props;
  switch (type) {
    case 'facebook':
      return facebookIconBackground;
    case 'twiter':
      return twiterIconBackground;
    case 'google':
      return googleIconBackground;
    default:
      return null;
  }
};

const buttonCircle = props => `
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 20px;
  margin-right: 8px;
  background: ${renderBackgroundColorCircleButton(props)};
`;

const renderButton = props => {
  switch (props.context) {
    case 'primary':
      return buttonPrimary(props.theme.backgroundColorPrimary);
    case 'link':
      return buttonLink(props.theme.greenPrimary);
    case 'circle':
      return buttonCircle(props);
    default:
      return null;
  }
};

export const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  color: ${props => props.theme.whitePrimary};
  box-shadow: 0 0 30px 5px ${props => props.theme.whitePrimary2};
  font-size: 14px;
  ${props => renderButton(props)};
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
    -webkit-opacity: 0.9;
    -moz-opacity: 0.9;
    -ms-opacity: 0.9;
    -o-opacity: 0.9;
    opacity: 0.9;
  }
  img {
    display: block;
    width: 20px;
    height: 20px;
  }
`;
