import styled from 'styled-components';
// Dekstop First
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledModal = styled.div`
  border-radius: 15px;
  background-color: var(--pokedex-color);
  width: 43%;
  max-width: 850px;
  min-width: 400px;
  padding: 20px;
  animation-duration: 1s;
  animation-name: fadein;

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const CloseButtonWrapper = styled.span`
  display: flex;
  justify-content: flex-end;
  color: var(--white-color);
`;

export const CloseButton = styled.span`
  font-weight: bold;
  font-size: 20px;

  &:hover {
    cursor: pointer;
  }
`;
