import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { HeaderHomeChat, ChatCallButtonWrapper } from './styles';
import SettingButton from './component/SettingButton';

function Header({ t }) {
  return (
    <HeaderHomeChat>
      <p className="user-info">
        <span className="username">Nguyen Dang Khoa</span>
        <span className="status-user">{t('commons.isOnlineNow')}</span>
      </p>
      <SettingButton />
      <div className="option-chat">
        <ChatCallButtonWrapper>
          <i className="ion-md-call" />
        </ChatCallButtonWrapper>
        <ChatCallButtonWrapper>
          <i className="ion-md-videocam" />
        </ChatCallButtonWrapper>
        <ChatCallButtonWrapper>
          <i className="ion-md-settings" />
        </ChatCallButtonWrapper>
        <ChatCallButtonWrapper>
          <i className="ion-md-apps" />
        </ChatCallButtonWrapper>
      </div>
    </HeaderHomeChat>
  );
}

Header.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(Header);
