import React from 'react';
// Components
import Button from '../components/Button';
import FilterInput from '../components/FilterInput';
import Table from '../components/Table';
import TableRow from '../components/TableRow';

// Style
import {
  StyledMain,
  StyledLabel,
  StyledInput,
  DisplayFlex,
  PokedexStatBox,
  PokemonAbilitiesBox,
} from '../styles/HomePage.style';
import HomePageLogic from './Logic/HomePageLogic';
const HomePage = () => {
  return (
    // Adding logic from HomePageLogic file
    <HomePageLogic
      render={(
        //  --- State
        // Random numbers
        randomNum,
        setRandomNum,
        // Filter pokemon
        filterPokemon,
        setFilterPokemon,
        // Array with Pokemon data in PokeDex
        pokemonArr,
        setPokemonArr,
        // Save Button (after edit pokemon is clicked)
        showSaveButton,
        setShowSaveButton,
        // Edit Pokemon Button (after save pokemon is clicked)
        showEditPokemonButton,
        setShowEditPokemonButton,
        // Input Toggler toggles between disabled(when edit pokemon is not clicked) and enabled (when edit pokemon is clicked and you can edit pokemon stats)
        inputToggler,
        setInputToggler,
        // --- Data from API
        pokemon,
        isLoading,
        error,
        //  --- Functions
        getNewPokemon,
        capitalizeFirstLetter,
        deletePokemon,
        saveNewInfo,
        editPokemon,
        changeValue
      ) => (
        <StyledMain>
          {isLoading ? (
            <img
              src='https://cdn.dribbble.com/users/341887/screenshots/4595077/arizdesign.gif'
              alt='loading-animation'
            />
          ) : (
            <>
              <Button text='Get Pokemon' primaryBtn action={getNewPokemon} />
              {pokemonArr.length ? (
                // Filtering pokemons by pokemon name
                <>
                  <FilterInput
                    filterValue={filterPokemon}
                    filterHandler={(e) => setFilterPokemon(e.target.value)}
                  />
                  {/* Showing pokemons in table */}
                  <Table
                    tableBody={pokemonArr
                      .filter(
                        (pokemon) =>
                          pokemon.name
                            .toLowerCase()
                            .includes(filterPokemon.toLowerCase()) ||
                          filterPokemon === ''
                      )
                      .map((item) => (
                        // Looping through pokemons that are in users Pokedex
                        <TableRow
                          key={item.id}
                          photo={item.sprites.front_default}
                          pokemonName={capitalizeFirstLetter(item.name)}
                          // Pokemon abilities shown in detailed pokemon info under stats
                          pokemonAbilities={
                            <PokemonAbilitiesBox>
                              {/* Getting single ability */}
                              {item.abilities.map((singleAbility) => (
                                <p key={singleAbility.ability.name}>
                                  {capitalizeFirstLetter(
                                    singleAbility.ability.name
                                  )}
                                </p>
                              ))}
                            </PokemonAbilitiesBox>
                          }
                          // Pokemon stats shown in detailed pokemon info
                          pokemonStats={item.stats.map((stat) => (
                            <PokedexStatBox key={stat.stat.name}>
                              <StyledLabel>
                                {capitalizeFirstLetter(stat.stat.name)}:{' '}
                              </StyledLabel>
                              <StyledInput
                                data-set-statname={stat.stat.name}
                                id={item.id}
                                disabled={inputToggler}
                                type='number'
                                defaultValue={stat.base_stat}
                                onChange={changeValue}
                              />
                            </PokedexStatBox>
                          ))}
                          type={item.types.map(
                            (type) =>
                              capitalizeFirstLetter(type.type.name) + ' '
                          )}
                          hp={item.stats[0].base_stat}
                          editAction={
                            <DisplayFlex>
                              <Button
                                text='Edit Pokemon'
                                secondaryBtn
                                action={editPokemon}
                                style={{ display: showEditPokemonButton }}
                              />
                              <Button
                                secondaryBtn
                                text='Save'
                                action={saveNewInfo}
                                style={{ display: showSaveButton }}
                              />
                            </DisplayFlex>
                          }
                          deleteAction={
                            <Button
                              text='Delete from PokeDex'
                              deleteBtn
                              action={deletePokemon}
                              deleteId={item.id}
                            />
                          }
                        />
                      ))}
                  />
                </>
              ) : (
                <p>You have 0 pokemons</p>
              )}
            </>
          )}
        </StyledMain>
      )}
    />
  );
};

export default HomePage;
