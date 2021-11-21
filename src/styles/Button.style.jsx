import styled from 'styled-components';
// Dekstop First
export const PrimaryButton = styled.button`
  padding: 15px 25px;
  margin: 10px;
  font-size: 16px;
  color: var(--white-color);
  background-color: var(--primary-color);
  border: none;
  border-radius: 10px;
  &:hover {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    cursor: pointer;
  }
`;

export const SecondaryButton = styled.button`
  padding: 15px 25px;
  margin: 10px;
  font-size: 16px;
  color: var(--black-color);
  background-color: var(--secondary-color);
  border: none;
  border-radius: 10px;
  &:hover {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    cursor: pointer;
  }
`;

export const DeleteButton = styled.button`
  padding: 15px 25px;
  margin: 10px;
  font-size: 16px;
  color: var(--white-color);
  background-color: var(--delete-color);
  border: none;
  border-radius: 10px;
  &:hover {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    cursor: pointer;
  }
`;
