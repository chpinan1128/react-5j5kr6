import React from 'react'
import styled, { withTheme } from 'styled-components'

const FontSwitcher = ({ switchFontSize, theme }) => {
  const { s, m, l, xl } = theme;
  return (
    <Switcher>
      <Switch size={s} onClick={switchFontSize(s)}>A</Switch>
      <Switch size={m} onClick={switchFontSize(m)}>A</Switch>
      <Switch size={l} onClick={switchFontSize(l)}>A</Switch>
      <Switch size={xl} onClick={switchFontSize(xl)}>A</Switch>
    </Switcher>
  )
}

export default withTheme(FontSwitcher)

const Switcher = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

const Switch = styled.span`
  margin: 0.25rem;
  cursor: pointer;
  font-size: ${({ size, theme = {} }) => size * theme.switcherFontSize}px;
  text-decoration: ${({ theme = {}, size }) => (theme.size === size ? "underline" : "none")};

  &:hover {
    text-decoration: underline;
  }
`;