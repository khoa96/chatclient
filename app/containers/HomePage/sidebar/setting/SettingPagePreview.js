import React from 'react';
import PropTypes from 'prop-types';
import Img from 'images/icon-512x512.png';
import ImageToolTip from 'containers/HomePage/components/ImageTooltip';
import { withTranslation } from 'react-i18next';
import SettingItem from 'containers/HomePage/components/SettingItem';
import SettingAccount from 'containers/HomePage/sidebar/setting/account';
import {
  SettingPreviewWrapper,
  HeaderSettingPreviewWrapper,
  BodySettingPreviewWrapper,
} from './styles';
function SettingPagePreview({ t }) {
  return (
    <SettingPreviewWrapper>
      <HeaderSettingPreviewWrapper>
        <div className="user-info">
          <ImageToolTip image={Img} isOnline />
          <span className="username">Nguyen Dang Khoa</span>
          <span className="address">Khoai Chau, Hung Yen</span>
        </div>
      </HeaderSettingPreviewWrapper>
      <p className="setting-title">{t('homeChat.setting.settingTitle')}</p>
      <BodySettingPreviewWrapper>
        <SettingItem
          classNameIcon="ion-md-person"
          settingTitle="homeChat.setting.settingAccountLabel"
          settingDescription="homeChat.setting.settingAccountDescription"
          component={props => <SettingAccount {...props} />}
        />
        <SettingItem
          classNameIcon="ion-md-chatboxes"
          settingTitle="homeChat.setting.settingChatLabel"
          settingDescription="homeChat.setting.settingChatDescription"
          component={props => <SettingAccount {...props} />}
        />
        <SettingItem
          classNameIcon="ion-md-notifications"
          settingTitle="homeChat.setting.settingNotificationLabel"
          settingDescription="homeChat.setting.settingNotificationDescription"
          component={props => <SettingAccount {...props} />}
        />
        <SettingItem
          classNameIcon="ion-md-flag"
          settingTitle="homeChat.setting.settingLanguageLabel"
          settingDescription="homeChat.setting.settingLanguageDescription"
          component={props => <SettingAccount {...props} />}
        />
      </BodySettingPreviewWrapper>
    </SettingPreviewWrapper>
  );
}

SettingPagePreview.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(SettingPagePreview);
