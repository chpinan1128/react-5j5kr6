import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { render } from 'react-dom';
import FontSwitcher from './FontSwitcher';
import Menu from './Menu';
import { defaultTheme, fontSizes } from './theme'
import Others from './Others';
import './style.scss';

const AppContainer = styled.div`
  text-align: center;
`;

class App extends React.Component {
  state = {
    size: defaultTheme.s
  };

  respondTo = (...args) => {
    const { size } = this.state;
    return css`
      @media (min-width: ${defaultTheme.desktop * size}px) {
        ${css(...args)};
      }
    `;
  };

  switchFontSize = size => () => {
    this.setState({ size });
  };

  get theme() {
    const { size } = this.state;
    const theme = { ...defaultTheme, respondTo: this.respondTo, size, ...fontSizes };
    Object.keys(fontSizes).forEach(key => {
      theme[key] = fontSizes[key] * size;
    })

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