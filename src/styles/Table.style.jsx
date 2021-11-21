import styled from 'styled-components';
// Dekstop First
export const StyledTable = styled.table`
  width: 100%;
  max-width: 1200px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 4px;
  border-collapse: collapse;
  & td {
    width: 20%;
  }
`;

export const TableHead = styled.th`
  padding: 15px;
`;
