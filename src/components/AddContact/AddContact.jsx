import React, { useState } from 'react';
import { Button } from './AddContact.styled';
import { Modal } from 'components/Modal';

export const AddContact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <Button type="button" onClick={toggleModal}>
        Add Contact
      </Button>
      {isModalOpen && <Modal closeModal={toggleModal} />}
    </>
  );
};
