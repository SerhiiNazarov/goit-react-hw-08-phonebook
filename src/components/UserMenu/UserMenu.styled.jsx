import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  margin-right: 5px;
`;

export const Name = styled.span`
  font-weight: 700;
  margin-right: 10px;

  &:hover {
    color: var(--accentColor);
  }
`;

export const Button = styled.button`
  padding: 5px 10px;
  margin-right: 10px;
  background-color: var(--accentColor);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 4px;
  border: none;
  outline: none;
  opacity: 0.8;
  transition: opacity 250ms var(--timingFn);

  cursor: pointer;
  color: #fff;
  font-weight: 500;
  font-size: 10px;
  text-transform: uppercase;

  &:hover {
    opacity: 1;
  }
`;
