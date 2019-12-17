import React from 'react';
import PropTypes from 'prop-types';
import Img from 'images/icon-512x512.png';
import { withTranslation } from 'react-i18next';
import Button from 'components/commons/Button';
import UploadFileButton from './components/UploadFileButton';
import InputText from './components/InputText';
import { UploadAvatarWrapper, UpdateUserInfoWrapper } from './styles';

function SettingAccount({ t }) {
  return (
    <React.Fragment>
      <UploadAvatarWrapper>
        <div className="upload">
          <img src={Img} alt="" />
          <UploadFileButton />
        </div>
        <p className="upload-description">
          {t('homeChat.setting.account.uploadAvatarDescription')}
        </p>
      </UploadAvatarWrapper>
      <UpdateUserInfoWrapper>
        <div className="username">
          <div className="first-name">
            <InputText
              type="text"
              inputTitle="homeChat.setting.account.firstNameLabel"
              value="Nguyen"
              isRequired
            />
          </div>
          <div className="last-name">
            <InputText
              type="text"
              inputTitle="homeChat.setting.account.lastNameLabel"
              value="Dang Khoa"
              isRequired
            />
          </div>
        </div>
        <InputText
          type="email"
          inputTitle="homeChat.setting.account.emailLabel"
          value="abc@gmail.com"
          isRequired
        />
        <InputText
          type="password"
          inputTitle="homeChat.setting.account.passwordLabel"
          value="1234567"
        />
        <InputText
          type="text"
          inputTitle="homeChat.setting.account.addressLabel"
          value="Khoai Chau, Hung Yen"
        />
      </UpdateUserInfoWrapper>
      <Button context="primary">
        {t('homeChat.setting.account.applyButton')}
      </Button>
    </React.Fragment>
  );
}

SettingAccount.propTypes = {
  t: PropTypes.func.isRequired,
};

export default withTranslation()(SettingAccount);
