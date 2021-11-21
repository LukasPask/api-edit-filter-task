import PropTypes from 'prop-types';
import React from 'react';
// Style
import {
  PrimaryButton,
  SecondaryButton,
  DeleteButton,
} from '../styles/Button.style';

const Button = ({
  text,
  action,
  primaryBtn,
  secondaryBtn,
  deleteBtn,
  deleteId,
  style,
}) => {
  let button;
  // One of the props will determine how the button will look like
  if (primaryBtn)
    button = (
      <PrimaryButton style={style} data-deleteid={deleteId} onClick={action}>
        {text}
      </PrimaryButton>
    );
  if (secondaryBtn)
    button = (
      <SecondaryButton style={style} data-deleteid={deleteId} onClick={action}>
        {text}
      </SecondaryButton>
    );
  if (deleteBtn)
    button = (
      <DeleteButton style={style} data-deleteid={deleteId} onClick={action}>
        {text}
      </DeleteButton>
    );

  return button;
};
// PropTypes
Button.propTypes = {
  text: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
};

Button.defaultProps = {
  text: 'Click me',
};

export default Button;
