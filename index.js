import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { render } from 'react-dom';
import FontSwitcher from './FontSwitcher';
import { theme as defaultTheme } from './theme'
import Hello from './Hello';
import './style.scss';

const fontSize = 12; // default font-size
const desktop = 640;
const s = 1;
const m = 1.5;
const l = 2;
const xl = 4;

const MenuItem = styled.div`
  margin-left: 0.5rem;
  margin-right: 0.5rem;
  cursor: pointer;

  ${({ theme }) =>
    theme.respondTo &&
    theme.respondTo`
		font-size: ${fontSize * theme.size || 1}px;
	`};
`;

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

const AppContainer = styled.div`
  text-align: center;
  font-size: ${fontSize}px;

  ${({ theme }) =>
    theme.respondTo &&
    theme.respondTo`
		font-size: ${fontSize * theme.size || 1}px;
	`};
`;

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

const DesktopMenuContainer = styled.div`
  display: none;
  justify-content: center;

  ${({ theme }) =>
    theme.respondTo &&
    theme.respondTo`
		display: flex;
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

class App extends React.Component {
  state = {
    size: s
  };

  respondTo = (...args) => {
    const { size } = this.state;
    return css`
      @media (min-width: ${desktop * size}px) {
        ${css(...args)};
      }
    `;
  };

  switchFontSize = size => () => {
    this.setState({ size });
  };

  render() {
    const { size } = this.state;
    const theme = { ...defaultTheme, respondTo: this.respondTo, size };

    return (
      <ThemeProvider theme={theme}>
        <AppContainer>
          <MenuContainer>
            <DesktopMenu />
            <MobileMenu />
          </MenuContainer>
          <FontSwitcher switchFontSize={this.switchFontSize} />
        </AppContainer>
      </ThemeProvider>
    );
  }
}

render(<App />, document.getElementById("root"));