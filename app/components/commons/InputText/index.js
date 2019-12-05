/* eslint-disable prettier/prettier */
import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { InputTextWrapper, InputWrapper } from './styles';

function InputText({
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
  type,
}) {
  return (
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
        type={type}
      />
      {isShowIcon && (
        <span className="input-icon">
          <i className={iconClassName} />
        </span>
      )}
    </InputTextWrapper>
  );
}

InputText.propTypes = {
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
  type: PropTypes.string,
}

InputWrapper.defaultProps = {
  isShowIcon: true,
  isRequired: false,
  autoComplete: false,
}

export default withTranslation()(InputText);
