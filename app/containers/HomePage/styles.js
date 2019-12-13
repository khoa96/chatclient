import styled from 'styled-components';

export const MainLayoutWrapper = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
`;

export const NavigationWrapper = styled.div`
  min-width: 90px;
  max-width: 100px;
  height: 100%;
  background-color: ${props => props.theme.grayPrimary9};
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  padding: 0px 10px;
`;

export const SidebarWrapper = styled.div`
  width: 370px;
  flex-shrink: 0;
  height: 100%;
  padding: 30px;
`;

export const MainChatWrapper = styled.div`
  flex-grow: 1;
  flex-shirk: 0;
  min-width: 990px;
  height: 100vh;
  border: 1px solid blue;
  display: flex;
  flex-direction: column;
`;

export const HeaderMainChatWrapper = styled.div`
  width: 100%;
  height: 70px;
  border: 1px solid tomato;
`;

export const BodyMainChatWrapper = styled.div`
  width: 100%;
  flex-grow: 1;
  border: 1px solid green;
`;

export const FooterMainChatWrapper = styled.div`
  width: 100%;
  height: 90px;
  border: 1px solid red;
`;
