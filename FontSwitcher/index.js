import React from 'react'
import styled, { withTheme } from 'styled-components'

const FontSwitcher = ({ switchFontSize, theme }) => {

  return (
    <Switcher>
      <Switch size='sm' onClick={switchFontSize('sm')}>SM</Switch>
      <Switch size='md' onClick={switchFontSize('md')}>MD</Switch>
      <Switch size='lg' onClick={switchFontSize('lg')}>LG</Switch>
      <Switch size='xl' onClick={switchFontSize('xl')}>XL</Switch>
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
  ${({ size, theme = {} }) => {
    return `
      font-size: ${theme.breakpoints[size] * theme.switcherFontSize}px
      text-decoration:${(theme.size === size ? "underline" : "none")}
    `
  }}

  &:hover {
    text-decoration: underline;
  }
`;