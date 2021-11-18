import React from 'react';
// Style
import { PrimaryButton } from '../styles/Button.style';

const Button = ({ text, action, primaryBtn, secondaryBtn, deleteBtn }) => {
  let button;
  if (primaryBtn)
    button = <PrimaryButton onClick={action}>{text}</PrimaryButton>;

  return button;
};

export default Button;
