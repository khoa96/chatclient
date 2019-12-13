import React from 'react';
import Img from 'images/icon-512x512.png';
import MessageHistory from './components/MessageHistory';
import Navigation from './navigation';
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
        <MessageHistory
          username="Dang Khoa"
          content="Nguyen Dang Khoa Hoc vien cong nghe buu chinh vien thong"
          time="5 mins"
          isActice
          image={Img}
          isUserOnline
        />
        <MessageHistory
          username="Trung Hieu"
          content="Nguyen Dang Khoa Hoc vien cong nghe buu chinh vien thong"
          time="5 mins"
          image={Img}
          isUserOnline={false}
        />
        <MessageHistory
          username="Trung Hieu Nguyen Hoang Trung Hieu"
          content="Nguyen Dang Khoa Hoc vien cong nghe buu chinh vien thong"
          time="5 mins"
          image={Img}
          isUserOnline={false}
          isActice
        />
        <MessageHistory
          username="Trung Hieu Nguyen"
          content="Nguyen Dang Khoa Hoc vien cong nghe buu chinh vien thong"
          time="5 mins"
          image={Img}
          isUserOnline={false}
          isActice={false}
        />
        <MessageHistory
          username="Trung Hieu"
          content="Nguyen Dang Khoa Hoc vien cong nghe buu chinh vien thong"
          time="5 mins"
          image={Img}
          isUserOnline={false}
          isActice={false}
        />
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
