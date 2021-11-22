import styled from 'styled-components';

// Dekstop First

export const StyledTableRow = styled.tr`
  &:hover {
    box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
      rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
    cursor: pointer;
    border-radius: 10px;
    opacity: 0.8;
    transition: 0.5s;
  }
`;

export const PokemonDetailedInfo = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 1500px) {
    justify-content: center;
    align-items: center;
  }
`;
export const DisplayFlex = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  @media screen and (max-width: 1500px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const StyledPokemonName = styled.h2`
  text-align: center;
  color: var(--white-color);
`;

export const PokemonImage = styled.img`
  width: 40%;
  margin-right: 20px;
  background-color: var(--white-color);
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
    rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
`;

export const PokemonStats = styled.div`
  & h3 {
    color: var(--white-color);
    text-align: center;
  }
  @media screen and (max-width: 1500px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    & h3 {
      margin-top: 15px;
    }
  }
`;

export const EditButtonWrapper = styled.div`
  text-align: center;
`;
