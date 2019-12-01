/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { AlertWrapper } from './style';

function Alert({ t, type, message }) {
  const [ isShowAlert, setIsShowAlert] = useState(true);
  const handleOnClick = () => {
    setIsShowAlert(!isShowAlert);
  }
  return (
    <React.Fragment>
      {
        isShowAlert && (
          <AlertWrapper type={type} >
            <span className="title">{t(message)}</span>
            <span 
              className="close-icon" 
              onClick={handleOnClick} 
              role="presentation"
            >
              <i className="ion-md-close" />
            </span>
          </AlertWrapper>
        )
      }
    </React.Fragment>
  )
}

Alert.propTypes = {
  t: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};
export default withTranslation()(Alert);
