import styled from 'styled-components';

export const ContactsList = styled.ul`
  margin-top: 30px;
  padding: 10px;
  color: var(--secondaryTextColor);
  font-weight: 500;
  font-size: 18px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
`;

export const ContactsItem = styled.li`
  display: grid;
  grid-template-columns: 3fr 3fr 3fr 1fr;
  &:not(:last-child) {
    margin-bottom: 10px;
  }

  &:hover {
    border-bottom: 1px solid var(--accentColor);
  }
`;

export const ContactsText = styled.p`
  font-size: 12px;
`;

export const Button = styled.button`
  width: 30px;
  height: auto;
  cursor: pointer;
  background-color: transparent;
  border: none;
  outline: none;
  transition: transform 250ms var(--timingFn);

  &:hover {
    transform: scale(1.3);
  }
`;
