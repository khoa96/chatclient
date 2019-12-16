import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import Img from 'images/icon-512x512.png';
import InputSearch from 'components/commons/InputSearch';
import ImageToolTip from 'containers/HomePage/components/ImageTooltip';
import RedirectButton from 'containers/HomePage/components/RedirectButton';
import NotificationHistory from 'containers/HomePage/components/NotificationHistory';
import {
  NotificationSidebarWrapper,
  HeaderNotificationWrapper,
  BodyNotificationWrapper,
} from './styles';

function NotificationPagePreview({ t }) {
  return (
    <NotificationSidebarWrapper>
      <HeaderNotificationWrapper>
        <div className="user">
          <ImageToolTip image={Img} isOnline />
          <div className="user-info">
            <span className="username">Nguyen Dang Khoa</span>
            <span className="status">{t('commons.isOnlineNow')}</span>
          </div>
        </div>
        <div className="search">
          <InputSearch
            placeholder="homeChat.notification.inputSearchPlaceholder"
            leftClassNameIcon="ion-md-search"
          />
        </div>
        <div className="control">
          <RedirectButton
            isActive
            text="homeChat.notification.allButtonLabel"
          />
          <RedirectButton text="homeChat.notification.latestButtonLabel" />
          <RedirectButton text="homeChat.notification.oldestButtonLabel" />
        </div>
        <div className="btn-add">
          <span className="title">
            {t('homeChat.notification.notificationTitle')}
          </span>
        </div>
      </HeaderNotificationWrapper>
      <BodyNotificationWrapper>
        <NotificationHistory
          username="Nguyen dang khoa"
          isUserOnline
          notificationContent="Sarah has accepted your friend request on Talkshak. Please check request"
          time="Oct 17, 2019"
          image={Img}
        />
        <NotificationHistory
          username="Nguyen dang khoa"
          isUserOnline
          notificationContent="Sarah has accepted your friend request on Talkshak. Please check request"
          time="Oct 17, 2019"
          image={Img}
        />
      </BodyNotificationWrapper>
    </NotificationSidebarWrapper>
  );
}

NotificationPagePreview.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation()(NotificationPagePreview);
