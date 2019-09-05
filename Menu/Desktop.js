import React from 'react';
import styled, { withTheme } from 'styled-components'
import { MenuItem } from './MenuItem';

const DesktopMenu = () => (
  <DesktopMenuContainer>
    <MenuItem>HTML</MenuItem>
    <MenuItem>CSS</MenuItem>
    <MenuItem>JavaScript</MenuItem>
    <MenuItem>Angular</MenuItem>
    <MenuItem>TypeScript</MenuItem>
    <MenuItem>NodeJS</MenuItem>
  </DesktopMenuContainer>
);

export default withTheme(DesktopMenu);

const DesktopMenuContainer = styled.div`
  display: none;
  justify-content: center;

  ${({ theme }) =>
    theme.respondTo &&
    theme.respondTo`
		display: flex;
	`};
`;