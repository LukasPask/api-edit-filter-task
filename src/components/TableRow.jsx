import PropTypes from 'prop-types';
import React from 'react';
// Components
import TableRowLogic from './Logic/TableRowLogic';
import Modal from './Modal';
// Style
import {
  StyledTableRow,
  PokemonDetailedInfo,
  DisplayFlex,
  StyledPokemonName,
  PokemonStats,
  PokemonImage,
  EditButtonWrapper,
} from '../styles/TableRow.style';

const TableRow = ({
  photo,
  pokemonName,
  type,
  hp,
  pokemonAbilities,
  pokemonStats,
  deleteAction,
  editAction,
}) => {
  return (
    // Adding logic from tableRowLogic file
    <TableRowLogic
      render={(isOpen, setIsOpen) => (
        <>
          <StyledTableRow onClick={() => setIsOpen(true)}>
            <td>
              <img src={photo} alt='pokemon-avatar' />
            </td>
            <td>{pokemonName}</td>
            <td>{type}</td>
            <td>{hp}</td>
            <td>{deleteAction}</td>
          </StyledTableRow>
          {isOpen && (
            <Modal
              onClose={() => setIsOpen(false)}
              children={
                <PokemonDetailedInfo>
                  <StyledPokemonName>{pokemonName}</StyledPokemonName>
                  <DisplayFlex>
                    <PokemonImage src={photo} alt='pokemon-avatar' />
                    <PokemonStats>
                      <h3>Stats</h3>
                      <div>{pokemonStats}</div>
                      <h3>Abilities</h3>
                      <div>{pokemonAbilities}</div>
                    </PokemonStats>
                  </DisplayFlex>
                  <EditButtonWrapper>{editAction}</EditButtonWrapper>
                </PokemonDetailedInfo>
              }
            />
          )}
        </>
      )}
    />
  );
};
// PropTypes
TableRow.propTypes = {
  photo: PropTypes.string.isRequired,
  pokemonName: PropTypes.string.isRequired,
  type: PropTypes.array.isRequired,
  hp: PropTypes.number.isRequired,
  pokemonStats: PropTypes.array.isRequired,
  deleteAction: PropTypes.object.isRequired,
  editAction: PropTypes.object.isRequired,
};

TableRow.defaultProps = {
  photo:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/2052px-Pok%C3%A9_Ball_icon.svg.png',
  pokemonName: 'Unknown',
  type: 'Unknown',
  hp: 'Unknown',
  pokemonStats: 'Unknown',
  deleteAction: 'Unknown',
  editAction: 'Unknown',
};

export default TableRow;
