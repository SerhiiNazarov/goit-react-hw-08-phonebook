import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;

  &:hover {
    color: var(--accentColor);
  }

  &.active {
    border-bottom: 1px solid black;
  }
`;
