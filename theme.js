
export const breakpoints = {
  sm: 1,
  md: 1.5,
  lg: 2,
  xl: 4,
}

export const fontSizes = {
  fontSize: 12,
  switcherFontSize: 18,
  size1: 24,
  size2: 18,
  size3: 12,
  size4: 9,
}

export const colors = {
  menuColor: {
    sm: '#7FFF00',
    md: '#00FF00',
    lg: '#228B22',
    xl: '#006400',
  },
  mainBackground: {
    sm: '#7FFF00',
    md: '#00FF00',
    lg: '#228B22',
    xl: '#006400',
  }
}

export const defaultTheme = {
  breakpoints,
  ...colors,
  ...fontSizes,
  desktop: 320,
}