import React from 'react';
import PropTypes from 'prop-types';
import NavigationButton from './components/NavigationButton';
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
        <NavigationButton />
      </NavigationWrapper>
      <SidebarWrapper>side bar warpper</SidebarWrapper>
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
