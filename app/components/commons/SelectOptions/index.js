import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { SelectOptionWrapper } from './style';
const options = [
  {
    id: 1,
    label: 'label1',
    value: 'value1',
  },
  {
    id: 2,
    label: 'label2',
    value: 'value2',
  },
  {
    id: 3,
    label: 'label3',
    value: 'value3',
  },
  {
    id: 4,
    label: 'label4',
    value: 'value4',
  },
];
function SelectOptions() {
  const handleGetValue = (event) => {
    console.log(event);
  };
  return (
    <SelectOptionWrapper>
      <Select
        options={options}
        isMulti
        onChange={handleGetValue}
        defaultValue={options[0]}
      />
    </SelectOptionWrapper>
  );
}

SelectOptions.propTypes = {};
export default SelectOptions;
