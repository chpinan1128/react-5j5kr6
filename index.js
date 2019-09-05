import React, { Component } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';
import { render } from 'react-dom';
import FontSwitcher from './FontSwitcher';
import Menu from './Menu';
import { theme as defaultTheme } from './theme'
import Hello from './Hello';
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

  render() {
    const { size } = this.state;
    const theme = { ...defaultTheme, respondTo: this.respondTo, size };

    return (
      <ThemeProvider theme={theme}>
        <AppContainer>
          <Menu />
          <FontSwitcher switchFontSize={this.switchFontSize} />
        </AppContainer>
      </ThemeProvider>
    );
  }
}

render(<App />, document.getElementById("root"));