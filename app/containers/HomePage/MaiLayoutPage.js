import React from 'react';
import Navigation from './navigation';
import Sidebar from './sidebar';
import {
  MainLayoutWrapper,
  NavigationWrapper,
  SidebarWrapper,
  MainChatWrapper,
  HeaderMainChatWrapper,
  BodyMainChatWrapper,
  FooterMainChatWrapper,
} from './styles';

function MainLayoutPage() {
  return (
    <MainLayoutWrapper>
      <NavigationWrapper>
        <Navigation />
      </NavigationWrapper>
      <SidebarWrapper>
        <Sidebar />
      </SidebarWrapper>
      <MainChatWrapper>
        <HeaderMainChatWrapper>header</HeaderMainChatWrapper>
        <BodyMainChatWrapper>body</BodyMainChatWrapper>
        <FooterMainChatWrapper>footer chat</FooterMainChatWrapper>
      </MainChatWrapper>
    </MainLayoutWrapper>
  );
}

MainLayoutPage.propTypes = {};

export default MainLayoutPage;
