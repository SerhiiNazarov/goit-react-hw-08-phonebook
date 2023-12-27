import { Overlay, ModalAddContact, CloseBtn, CloseIcon } from './Modal.styled';
import FormPhonebook from 'components/FormPhonebook';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ closeModal }) => {
  return createPortal(
    <Overlay>
      <ModalAddContact>
        <CloseBtn type="button " onClick={closeModal}>
          <CloseIcon />
        </CloseBtn>
        <FormPhonebook closeModal={closeModal} />
      </ModalAddContact>
    </Overlay>,
    modalRoot
  );
};
