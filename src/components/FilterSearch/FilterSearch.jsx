import React from 'react';
import { InputField } from './FilterSearch.styled.jsx';

const Filter = ({ value, onChange }) => {
  const handleInputChange = event => {
    onChange(event.target.value);
  };

  return (
    <InputField type="text" name="filter" value={value} onChange={handleInputChange} />
  );
};

export default Filter;