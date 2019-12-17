import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { InputTextWrapper } from './styles';

function InputText({
  t,
  inputTitle,
  isRequired,
  error,
  value,
  className,
  type,
}) {
  return (
    <InputTextWrapper error={error} className={className}>
      <div className="input-group">
        <label htmlFor="input-text" className="input-label">
          <span className="input-title">{t(inputTitle)}</span>
          {isRequired && <span className="input-required">*</span>}
        </label>
        <input
          type={type}
          value={value}
          id="input-text"
          className="input-text"
          autoComplete="off"
        />
      </div>
      {error && <p className="error">{error}</p>}
    </InputTextWrapper>
  );
}

InputText.propTypes = {
  t: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
  inputTitle: PropTypes.string,
  isRequired: PropTypes.bool,
  error: PropTypes.string,
  className: PropTypes.string,
};

export default withTranslation()(InputText);
