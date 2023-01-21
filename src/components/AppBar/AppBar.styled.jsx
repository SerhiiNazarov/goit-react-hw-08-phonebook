import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--accentColor);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  opacity: 0.8;
  transition: opacity 250ms var(--timingFn);
`;
