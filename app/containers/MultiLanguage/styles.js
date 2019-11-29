import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 200px;
  height: 50px;
  padding: 10px;
  background: ${props => props.theme.backgroundColorPrimary};
  border-radius: 30px;
`;
