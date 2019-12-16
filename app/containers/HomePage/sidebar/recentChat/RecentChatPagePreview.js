/* eslint-disable prettier/prettier */
import React from 'react';
import i18n from 'i18n';
import Img from 'images/icon-512x512.png';
import InputSearch from 'components/commons/InputSearch';
import ImageToolTip from 'containers/HomePage/components/ImageTooltip';
import RedirectButton from 'containers/HomePage/components/RedirectButton';
import DropdownButton from 'containers/HomePage/components/DropdownButton';
import MessageHistory from 'containers/HomePage/components/MessageHistory';
import {
  RecentChatSidebarWrapper,
  HeaderRecentChatWrapper,
  BodyRecentChatWrapper,
} from './styles';

function RecentChatPagePreview() {
  return (
    <RecentChatSidebarWrapper>
      <HeaderRecentChatWrapper>
        <div className="user">
          <ImageToolTip image={Img} isOnline />
          <div className="user-info">
            <span className="username">Nguyen Dang Khoa</span>
            <span className="status">{i18n.t('commons.isOnlineNow')}</span>
          </div>
        </div>
        <div className="search">
          <InputSearch
            placeholder="homeChat.recentChat.inputSearchPlaceholder"
            leftClassNameIcon="ion-md-search"
            rightClassNameIcon="ion-md-create"
          />
        </div>
        <div className="control">
          <RedirectButton isActive text="homeChat.recentChat.allButtonLabel" />
          <RedirectButton text="homeChat.recentChat.favouritButtonLabel" />
          <RedirectButton text="homeChat.recentChat.unreadButtonLabel" />
        </div>
        <div className="btn-add">
          <span className="title">{i18n.t('homeChat.recentChat.chatsTitlte')}</span>
          <DropdownButton />
        </div>
      </HeaderRecentChatWrapper>
      <BodyRecentChatWrapper>
        <MessageHistory
          username="Trung Hieu"
          content="Nguyen Dang Khoa hoc vien cong nghe buu chinh vien thong"
          image={Img}
          isUserOnline
          time="5 mins"
          type="messages"
        />
        <MessageHistory
          username="Nhat Minh"
          content="Nguyen Dang Khoa hoc vien cong nghe buu chinh vien thong"
          image={Img}
          isUserOnline
          time="5 mins"
          type="messages"
        />
        <MessageHistory
          username="Dang Khoa"
          content="Nguyen Dang Khoa hoc vien cong nghe buu chinh vien thong"
          image={Img}
          isUserOnline
          time="5 mins"
          type="messages"
        />
        <MessageHistory
          username="Trung Hieu"
          content="Nguyen Dang Khoa hoc vien cong nghe buu chinh vien thong"
          image={Img}
          isUserOnline
          time="5 mins"
        />
        <MessageHistory
          username="Nhat Minh"
          content="Nguyen Dang Khoa hoc vien cong nghe buu chinh vien thong"
          image={Img}
          isUserOnline
          time="5 mins"
          type="messages"
        />
        <MessageHistory
          username="Dang Khoa"
          content="Nguyen Dang Khoa hoc vien cong nghe buu chinh vien thong"
          image={Img}
          isUserOnline
          time="5 mins"
          type="messages"
        />
      </BodyRecentChatWrapper>
    </RecentChatSidebarWrapper>
  )
}

export default RecentChatPagePreview;
