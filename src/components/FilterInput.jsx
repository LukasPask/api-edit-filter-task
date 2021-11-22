import React from 'react';
// Styles
import { StyledInput } from '../styles/FilterInput.style';
// Component
const FilterInput = ({ filterValue, filterHandler }) => {
  // For filtering pokemons by name
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
