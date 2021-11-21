import { useState } from 'react';

const TableRowLogic = ({ render }) => {
  // Hooks
  // State
  // For controlling the modal with pokemon details
  const [isOpen, setIsOpen] = useState(false);

  return render(isOpen, setIsOpen);
};

export default TableRowLogic;
