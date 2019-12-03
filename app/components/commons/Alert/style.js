/* eslint-disable consistent-return */
/* eslint-disable default-case */
/* eslint-disable prettier/prettier */
import styled from 'styled-components';

const  renderAlertColor = props => {
  const { type, theme } = props;
  switch(type) {
    case 'success':
      return {
        color: theme.greenPrimary2,
        background: theme.greenPrimary3,
      }
    case 'warning':
      return {
        color: theme.yellowPrimary,
        background: theme.yellowPrimary2,
      }
    case 'danger':
      return {
        color: theme.redPrimary,
        background: theme.redPrimary2,
      }
  }
}
export const AlertWrapper = styled.div`
  width: 100%;
  max-width: 340px;
  padding: 10px 15px;
  border: 1px solid transparent;
  font-size: 15px;
  margin-bottom: 10px;
  border-radius: 4px;
  display: flex;
  justify-content: space-between;
  color: ${props => renderAlertColor(props).color};
  background-color: ${props => renderAlertColor(props).background};

  .close-icon {
    font-size: 18px;
    color: rgba(0, 0, 0, 0.4);
    font-weight: 900;
    opacity: 0.8;

    &:hover {
      cursor: pointer;
    }
  }
`;
