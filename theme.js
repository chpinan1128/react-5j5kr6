
export const breakpoints = {
  sm: 1,
  md: 1.5,
  lg: 2,
  xl: 4,
}

export const fontSizes = {
  fontSize: 12,
  switcherFontSize: 12,
  size1: 24,
  size2: 18,
  size3: 12,
  size4: 9,
}

export const colors = {
  menuColor: {
    sm: '#006400',
    md: '#228B22',
    lg: '#00FF00',
    xl: '#7FFF00',
  },
  mainBackground: {
    sm: '#696969',
    md: '#C0C0C0',
    lg: '#DCDCDC',
    xl: 'white',
  }
}

export const defaultTheme = {
  breakpoints,
  ...colors,
  ...fontSizes,
  desktop: 320,
}