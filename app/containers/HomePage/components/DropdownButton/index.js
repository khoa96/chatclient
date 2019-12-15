/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { DropdownButtonWrapper, ContentWrapper } from './styles';

function DropdownButton({ t }) {
  const [isShowDropdown, setIsShowDropdown] = useState(false);
  const handleToogleDropdown = () => {
    setIsShowDropdown(!isShowDropdown);
  }
  return (
    <DropdownButtonWrapper>
      <button 
        className="btn" 
        type="button"
        onClick={handleToogleDropdown}
      >
        Add +
      </button>
      {
        isShowDropdown && (
          <ContentWrapper>
            <li className="list-item">{t('commons.addNewUserLabel')}</li>
            <li className="list-item">{t('commons.addNewGroupLabel')}</li>
            <li className="list-item">{t('commons.addNewPrivateChatLabel')}</li>
          </ContentWrapper>
        )
      }
    </DropdownButtonWrapper>
  )
}

DropdownButton.propTypes = {
  t: PropTypes.func.isRequired,
};
export default withTranslation()(DropdownButton);
