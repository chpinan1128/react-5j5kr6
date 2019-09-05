import React from 'react';
import styled, { withTheme } from 'styled-components'
import DesktopMenu from './Desktop';
import MobileMenu from './Mobile';

const Menu = () => {
  return (
    <MenuContainer>
      <DesktopMenu />
      <MobileMenu />
    </MenuContainer>
  )
}

const MenuContainer = styled.div`
  padding: 24px 1rem;
  display: flex;
  justify-content: center;

  ${({ theme }) =>
    theme.respondTo &&
    theme.respondTo`
		display: block;
	`};
`;

export default withTheme(Menu);