import React from 'react';
import styled, { withTheme } from 'styled-components'
import { MenuItem } from './MenuItem';

const MobileMenu = () => {
  const [open, setOpen] = React.useState(false);
  const closeMenu = () => setOpen(false);
  const openMenu = () => !open && setOpen(true);

  return (
    <HurgerMenu onClick={openMenu}>
      <span />
      <span />
      <span />
      {open && (
        <>
          <MobileMenuContainer>
            <MenuItem>HTML</MenuItem>
            <MenuItem>CSS</MenuItem>
            <MenuItem>JavaScript</MenuItem>
            <MenuItem>Angular</MenuItem>
            <MenuItem>TypeScript</MenuItem>
            <MenuItem>NodeJS</MenuItem>
          </MobileMenuContainer>
          <Overlay onClick={closeMenu} />
        </>
      )}
    </HurgerMenu>
  );
};

export default withTheme(MobileMenu);

const HurgerMenu = styled.div`
  width: 50px;
  height: 48px;
  position: relative;
  cursor: pointer;
  display: block;

  span {
    position: absolute;
    height: 5px;
    width: 100%;
    background: #333;
    border-radius: 9px;
    left: 0;

    &:nth-child(1) {
      top: 0;
    }

    &:nth-child(2) {
      top: 12px;
    }

    &:nth-child(3) {
      top: 24px;
    }
  }

  ${({ theme }) =>
    theme.respondTo &&
    theme.respondTo`
		display: none;
	`};
`;

const MobileMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: white;
  border: 1px #e5e5e5 solid;
  padding: 16px;
  border-radius: 5px;
  position: absolute;
  left: calc(-50% - 32px);
  top: 32px;
  z-index: 1000;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: #00000021;
  z-index: 0;
`;
