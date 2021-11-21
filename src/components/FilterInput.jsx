import React from 'react';
// Styles
import { StyledInput } from '../styles/FilterInput.style';

const FilterInput = ({ filterValue, filterHandler }) => {
  return (
    <StyledInput
      type='text'
      placeholder='Search...'
      onChange={filterHandler}
      value={filterValue}
    />
  );
};

export default FilterInput;
