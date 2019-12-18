import React from 'react';
import Header from './header';
import {
  MainChatWrapper,
  HeaderMainChatWrapper,
  // BodyMainChatWrapper,
  // FooterMainChatWrapper,
} from './styles';

function MainChat() {
  return (
    <MainChatWrapper>
      <HeaderMainChatWrapper>
        <Header />
      </HeaderMainChatWrapper>
    </MainChatWrapper>
  );
}

export default MainChat;
