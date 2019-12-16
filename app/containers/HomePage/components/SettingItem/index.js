import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import {
  SettingItemWrapper,
  HeaderSettingItem,
  ContentSettingItem,
} from './styles';

function SettingItem({
  t,
  classNameIcon,
  settingDescription,
  settingTitle,
  component,
}) {
  const [isShowContent, setIsShowContent] = useState(false);
  const handleToogleContent = () => {
    setIsShowContent(!isShowContent);
  };
  return (
    <SettingItemWrapper>
      <HeaderSettingItem onClick={handleToogleContent}>
        <div className="main-content">
          <span className="setting-icon">
            <i className={classNameIcon} />
          </span>
          <div className="setting-content">
            <span className="setting-title">{t(settingTitle)}</span>
            <span className="setting-description">{t(settingDescription)}</span>
          </div>
        </div>
        <span className="arrow-icon">
          {!isShowContent ? (
            <i className="ion-ios-arrow-down" />
          ) : (
            <i className="ion-ios-arrow-up" />
          )}
        </span>
      </HeaderSettingItem>
      <ContentSettingItem
        className={
          isShowContent ? 'panel-collapse' : 'panel-collapse panel-close'
        }
      >
        {component()}
      </ContentSettingItem>
    </SettingItemWrapper>
  );
}

SettingItem.propTypes = {
  t: PropTypes.func.isRequired,
  classNameIcon: PropTypes.string.isRequired,
  settingTitle: PropTypes.string.isRequired,
  settingDescription: PropTypes.string.isRequired,
  component: PropTypes.any.isRequired,
};

export default withTranslation()(SettingItem);
