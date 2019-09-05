import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { render } from 'react-dom';
import FontSwitcher from './FontSwitcher';
import Menu from './Menu';
import { defaultTheme, fontSizes, colors } from './theme'
import Others from './Others';
import './style.scss';

const AppContainer = styled.div`
  text-align: center;
`;

class App extends React.Component {
  state = {
    size: 'sm'
  };

  respondTo = (...args) => {
    const { size } = this.state;
    return css`
      @media (min-width: ${defaultTheme.desktop * defaultTheme.breakpoints[size]}px) {
        ${css(...args)};
      }
    `;
  };

  switchFontSize = size => () => {
    this.setState({ size });
  };

  get theme() {
    const { size } = this.state;
    const theme = {
      ...defaultTheme,
      respondTo: this.respondTo,
      size,
    };
    // override font sizes
    Object.keys(fontSizes).forEach(key => {
      theme[key] = fontSizes[key] * theme.breakpoints[size];
    })
    // override background colors
    Object.keys(colors).forEach(key => {
      theme[key] = colors[key][size];
    })
    
    // change body background color for different zoom levels
    document.body.style.background = theme.mainBackground;
    return theme;
  }

  render() {
    return (
      <ThemeProvider theme={this.theme}>
        <AppContainer>
          <Menu />
          <FontSwitcher switchFontSize={this.switchFontSize} />
          <Others />
        </AppContainer>
      </ThemeProvider>
    );
  }
}

render(<App />, document.getElementById("root"));