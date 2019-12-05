import React, { useState } from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import {
  InputPasswordWrapper,
  StatusPasswordWrapper,
  InputTextWrapper,
  InputWrapper,
} from './styles';

function InputPassword({
  t,
  placeholder,
  iconClassName,
  onChange,
  defaultValue,
  isShowIcon,
  isRequired,
  name,
  autoComplete,
  value,
  error,
}) {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const handleTogglePassword = () => {
    if (value) {
      setIsShowPassword(!isShowPassword);
    }
  };

  return (
    <InputPasswordWrapper>
      <StatusPasswordWrapper>
        <span role="presentation" onClick={handleTogglePassword}>
          <span className="icon-eye">
            <i className={isShowPassword ? 'ion-md-eye' : 'ion-md-eye-off'} />
          </span>
          <span className="status-text">
            {isShowPassword
              ? t('commons.hidenPassword')
              : t('commons.showPassword')}
          </span>
        </span>
      </StatusPasswordWrapper>
      <InputTextWrapper>
        <InputWrapper
          defaultValue={defaultValue || ''}
          value={value}
          placeholder={t(placeholder)}
          onChange={onChange}
          required={isRequired}
          name={name}
          autoComplete={autoComplete ? 'on' : 'off'}
          error={error}
          type={isShowPassword ? 'text' : 'password'}
        />
        {isShowIcon && (
          <span className="input-icon" role="presentation">
            <i className={iconClassName} />
          </span>
        )}
      </InputTextWrapper>
    </InputPasswordWrapper>
  );
}

InputPassword.propTypes = {
  t: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  iconClassName: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  defaultValue: PropTypes.string,
  isShowIcon: PropTypes.bool.isRequired,
  isRequired: PropTypes.bool.isRequired,
  autoComplete: PropTypes.bool,
  value: PropTypes.string,
  error: PropTypes.string,
};

export default withTranslation()(InputPassword);
