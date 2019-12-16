import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { InputTextWrapper, InputSearchWrapper } from './styles';

function InputSearch({
  t,
  value,
  defaultValue,
  onChange,
  name,
  placeholder,
  leftClassNameIcon,
  rightClassNameIcon,
}) {
  return (
    <InputSearchWrapper>
      <InputTextWrapper>
        <button type="button" className="btn-search">
          <span>
            <i className={leftClassNameIcon} />
          </span>
        </button>
        <input
          type="text"
          placeholder={t(placeholder)}
          className="input-search"
          onChange={onChange}
          value={value}
          defaultValue={defaultValue || ''}
          name={name}
        />
      </InputTextWrapper>
      <button type="button" className="btn-create">
        <span>
          <i className={rightClassNameIcon} />
        </span>
      </button>
    </InputSearchWrapper>
  );
}

InputSearch.propTypes = {
  t: PropTypes.func.isRequired,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  leftClassNameIcon: PropTypes.string,
  rightClassNameIcon: PropTypes.string,
};

export default withTranslation()(InputSearch);
