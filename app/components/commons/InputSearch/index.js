import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { InputTextWrapper, InputSearchWrapper } from './styles';

function InputSearch({ t, value, defaultValue, onChange }) {
  return (
    <InputSearchWrapper>
      <InputTextWrapper>
        <button type="button" className="btn-search">
          <span>
            <i className="ion-md-search" />
          </span>
        </button>
        <input
          type="text"
          placeholder={t('homeChat.inputSearchPlaceholder')}
          className="input-search"
          onChange={onChange}
          value={value}
          defaultValue={defaultValue || ''}
        />
      </InputTextWrapper>
      <button type="button" className="btn-create">
        <span>
          <i className="ion-md-create" />
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
};

export default withTranslation()(InputSearch);
