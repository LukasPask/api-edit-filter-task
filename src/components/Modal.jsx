import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
// Icons
import { CgCloseR } from 'react-icons/cg';
// Style
import {
  StyledModal,
  ModalWrapper,
  Overlay,
  CloseButtonWrapper,
  CloseButton,
} from '../styles/Modal.style';

const Modal = ({ children, onClose }) => {
  // For validating so user would not leave if the stats is not saved
  const validator =
    children.props.children[2].props.children.props.children[0].props.style
      .display;
  // Exit function(if stats are saved user can leave the more detailed pokemon description)
  const closeModal = () => {
    if (validator === 'none') {
      alert('Please save your Pokemon stats before leaving');
    } else {
      onClose();
    }
  };
  // If mouse is clicked outside the modal, modal will close
  const closeOnOverlay = (e) => {
    if (e.target.dataset.id === 'modalWrapper') {
      closeModal();
    }
  };

  return ReactDOM.createPortal(
    <>
      <Overlay></Overlay>
      <ModalWrapper onClick={(e) => closeOnOverlay(e)} data-id='modalWrapper'>
        <StyledModal>
          <CloseButtonWrapper>
            <CloseButton onClick={closeModal}>
              <CgCloseR />
            </CloseButton>
          </CloseButtonWrapper>
          <div>{children}</div>
        </StyledModal>
      </ModalWrapper>
    </>,
    document.getElementById('portal')
  );
};
// PropTypes
Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
