import { useState } from 'react';
// Logic (custom hooks)
import useFetch from '../hooks/useFetch';

const HomePageLogic = ({ render }) => {
  // Hooks
  // Random number generator
  // Array for later checking if pokemon ID already in array
  let randomNumbersArr = [];
  // Function for random number generation
  const randomNumber = (maxNum) => {
    // Generate random number
    let random = (Math.random() * maxNum).toFixed();
    // Check if number is already in array

    if (!randomNumbersArr.includes(random)) {
      randomNumbersArr.push(random);
      return random;
    } else {
      if (randomNumbersArr.length < maxNum) {
        //Recursively generate number
        return randomNumber(maxNum);
      } else {
        alert('Congratulations you caught them all!!!');
        return false;
      }
    }
  };
  // state
  //   Getting random number for random pokemon from API (default value also random)
  const [randomNum, setRandomNum] = useState(randomNumber(897));
  // Pokemon filter by pokemon name
  const [filterPokemon, setFilterPokemon] = useState('');
  //   All pokemons in users Pokedex
  const [pokemonArr, setPokemonArr] = useState([]);
  //   Toggling between save button display
  const [showSaveButton, setShowSaveButton] = useState('none');
  //   Toggling between edit button display
  const [showEditPokemonButton, setShowEditPokemonButton] = useState('block');
  //   Toggling inputs if true then inputs are disabled(can't be edited) if false inputs can be edited
  const [inputToggler, setInputToggler] = useState(true);
  // Custom hooks
  //   Getting pokemon data from API
  const {
    data: pokemon,
    isLoading,
    error,
  } = useFetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}/`);
  //   Custom functions
  // Getting new pokemon in users pokedex
  const getNewPokemon = () => {
    // Getting new random number
    setRandomNum(randomNumber(897));
    // Adding pokemon to an existing pokemon array
    setPokemonArr([...pokemonArr, pokemon]);
  };
  //   Capitalizes first letter of given string and removes '-'
  const capitalizeFirstLetter = (string) => {
    // Replaces - with ' '
    string = string.split('-').join(' ');
    // Makes first letter upper case
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Delete pokemon on click
  const deletePokemon = (e) => {
    // Deleting pokemon that delete id and pokemon id matches
    setPokemonArr(
      // Filtering the pokemons and returning only pokemons that delete ID does not match
      pokemonArr.filter((singlePokemon) => {
        return singlePokemon.id !== +e.target.dataset.deleteid;
      })
    );
  };
  // Makes inputs disabled and shows edit pokemon button
  const saveNewInfo = () => {
    // Makes save button display none
    setShowSaveButton('none');
    // Makes edit button display none
    setShowEditPokemonButton('block');
    // Turns off inputs so they can't be edited
    setInputToggler(true);
  };
  // Makes inputs enabled and shows save pokemon button
  const editPokemon = () => {
    // Makes save button display none
    setShowSaveButton('block');
    // Makes edit button display none
    setShowEditPokemonButton('none');
    // Turns on inputs so they could be edited
    setInputToggler(false);
  };
  //   Changes value of the chosen stat
  const changeValue = (e) => {
    // Filtering and finding pokemon that more info is open
    const onePokemon = pokemonArr.filter((item) => item.id === +e.target.id);
    // finding the stat that input is on focus
    const oneStat = onePokemon.map((stat) =>
      stat.stats.filter(
        (single) => single.stat.name === e.target.dataset.setStatname
      )
    );
    // Changing pokemon stat to input value
    oneStat.map((item) => (item[0].base_stat = +e.target.value));
  };

  return render(
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
  );
};

export default HomePageLogic;
