import { createStitches } from '@stitches/react'

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors: {
      'primaryColor-light': '#9e8cfc',
      'primaryColor-mid': '#8a2be2',
      'primaryColor-dark': '#4e2667',

      'secondaryColor-light': '#FF4938',
      'secondaryColor-mid': '#FF230F',
      'secondaryColor-dark': '#DC2413',

      'neutralColor-100': '#F2F2FA',
      'neutralColor-200': '#ECEDEE',
      'neutralColor-300': '#A8A8B3',
      'neutralColor-400': '#9BA1A6',
      'neutralColor-500': '#697177',
      'neutralColor-600': '#3A3F42',
      'neutralColor-700': '#29292E',
      'neutralColor-800': '#202024',
      'neutralColor-900': '#151718',

      'semanticColor-positive': '#04D361',
      'semanticColor-negative': '#FF5343',

      black: '#000000',
      white: '#FFFFFF'
    },
    fonts: {
      default: '"Roboto", sans-serif',
      highlight: '"Inter", sans-serif'
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '3rem',
      '4xl': '4rem'
    },
    lineHeights: {
      shorter: '120%',
      short: '140%',
      tall: '160%',
      taller: '180%'
    },
    radii: {
      base: '5',
      medium: '12',
      pill: '9999'
    },
    borderWidths: {
      thin: '1',
      mid: '2',
      thick: '4'
    },
    space: {
      '0': '0rem',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '40': '10rem'
    }
  },
  media: {
    sm: '(max-width: 30em)',
    md: '(max-width: 38em)',
    lg: '(max-width: 62em)',
    xl: '(max-width: 80em)'
  }
})
