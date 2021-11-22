import PropTypes from 'prop-types';
import React from 'react';
// Style
import { StyledTable, TableHead } from '../styles/Table.style';
// Component
const Table = ({ tableBody }) => {
  return (
    <StyledTable>
      <thead>
        <tr>
          <TableHead>Photo</TableHead>
          <TableHead>Pokemon</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>HP</TableHead>
          <TableHead>Action</TableHead>
        </tr>
      </thead>
      <tbody>{tableBody}</tbody>
    </StyledTable>
  );
};
// PropTypes
Table.propTypes = {
  tableBody: PropTypes.node.isRequired,
};

Table.defaultProps = {
  tableBody: 'You have 0 pokemons',
};

export default Table;
