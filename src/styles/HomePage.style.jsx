import styled from 'styled-components';
// Dekstop First
export const StyledMain = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

export const StyledLabel = styled.label`
  width: 50%;
  color: var(--white-color);
  font-size: 18px;
`;

export const StyledInput = styled.input`
  border: none;
  outline: none;
  background-color: var(--pokedex-color);
  color: var(--white-color);
  font-size: 18px;
  padding: 5px 0;
  margin: 6px 0;
  animation: blinker 1.8s linear infinite;
  @keyframes blinker {
    50% {
      opacity: 30%;
    }
  }
  /* Removing the arrows from the inputs */
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }
  &:disabled {
    animation: none;
    margin: 6px 0;
    padding: 5px 0;
    border: none;
    background-color: var(--pokedex-color);
    color: var(--white-color);
  }
`;

export const DisplayFlex = styled.div`
  display: flex;
  justify-content: center;
`;

export const PokedexStatBox = styled.div`
  width: 100%;
`;

export const PokemonAbilitiesBox = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: space-around;
  & p {
    color: var(--white-color);
    font-size: 18px;
  }
`;
