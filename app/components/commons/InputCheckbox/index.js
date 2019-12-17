import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';
import { InputWrapper } from './styles';

class InputCheckbox extends React.PureComponent {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(evt) {
    const { checked, name } = evt.target;
    this.props.onChange({ target: { value: checked, name } });
  }

  render() {
    const { value, onChange, text, disabled, checked, name } = this.props;
    return (
      <InputWrapper className="container">
        <input
          type="checkbox"
          checked={checked}
          name={name}
          value={value}
          onChange={onChange}
          disabled={!!disabled}
        />
        <span className="checkmark" />
        {text}
      </InputWrapper>
    );
  }
}

InputCheckbox.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  checked: PropTypes.any,
};

InputCheckbox.defaultProps = {
  value: '',
};

export default withTranslation()(InputCheckbox);
