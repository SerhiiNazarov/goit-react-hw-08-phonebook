import styled from 'styled-components';

export const Button = styled.button`
  padding: 10px 20px;
  min-width: 300px;
  background-color: var(--accentColor);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  margin: 0 0 40px 0;
  border: none;
  outline: none;
  opacity: 0.8;
  transition: opacity 250ms var(--timingFn);

  cursor: pointer;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;

  &:hover {
    opacity: 1;
  }
`;
