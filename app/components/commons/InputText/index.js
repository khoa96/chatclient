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
}) {
  return (
    <InputTextWrapper>
      <InputWrapper
        defaultValue={defaultValue || ''}
        value={value}
        type="text"
        placeholder={t(placeholder)}
        onChange={onChange}
        required={isRequired}
        name={name}
        autoComplete={autoComplete ? 'on' : 'off'}
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
}

InputWrapper.defaultProps = {
  isShowIcon: true,
  isRequired: false,
  autoComplete: false,
}

export default withTranslation()(InputText);
