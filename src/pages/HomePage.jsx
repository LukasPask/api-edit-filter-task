import React, { useState } from 'react';
// Components
import Button from '../components/Button';
import Table from '../components/Table';
// Logic
import useFetch from '../hooks/useFetch';

// Style
import { StyledMain } from '../styles/HomePage.style';
const HomePage = () => {
  // Hooks
  //   logic

  // state
  const [randomNum, setRandomNum] = useState(
    Math.floor(Math.random() * (897 - 1)) + 1
  );
  const [pokemonArr, setpokemonArr] = useState([]);
  // custom hooks
  const {
    data: pokemon,
    isLoading,
    error,
  } = useFetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}/`);
  //   Custom functions
  const getNewPokemon = () => {
    setRandomNum(Math.floor(Math.random() * (897 - 1)) + 1);
    setpokemonArr([...pokemonArr, pokemon]);
  };

  return (
    <StyledMain>
      {isLoading ? (
        <img
          src='https://cdn.dribbble.com/users/341887/screenshots/4595077/arizdesign.gif'
          alt='loading-animation'
        />
      ) : (
        <>
          <Button text='Get Pokemon' primaryBtn action={getNewPokemon} />
          {pokemonArr ? (
            pokemonArr.map((item) => (
              <ul key={item.id}>
                <li>{item.name}</li>
                <li></li>
                <li></li>
              </ul>
            ))
          ) : (
            <p>You have 0 pokemons</p>
          )}
        </>
      )}
    </StyledMain>
  );
};

export default HomePage;
