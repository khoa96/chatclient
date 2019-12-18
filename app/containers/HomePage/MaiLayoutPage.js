import React from 'react';
import Navigation from './navigation';
import Sidebar from './sidebar';
import MainChat from './mainchat';
import {
  MainLayoutWrapper,
  NavigationWrapper,
  SidebarWrapper,
  MainChatWrapper,
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
        <MainChat />
      </MainChatWrapper>
    </MainLayoutWrapper>
  );
}

MainLayoutPage.propTypes = {};

export default MainLayoutPage;
