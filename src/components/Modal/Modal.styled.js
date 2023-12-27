import styled from 'styled-components';
import { IoCloseCircleOutline } from 'react-icons/io5';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalAddContact = styled.div`
  position: relative;
  padding: 50px 30px 0 30px;
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  border: 1px solid var(--accentColor);
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  opacity: 0.8;
  transition: opacity 250ms var(--timingFn);
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  padding: 0;
`;

export const CloseIcon = styled(IoCloseCircleOutline)`
  width: 32px;
  height: 32px;
  color: var(--accentColor);
  transition: opacity 250ms var(--timingFn);

  &:hover {
    scale: 1.1;
    color: red;
  }
`;
