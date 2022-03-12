import { globalCss } from '../../stitches.config'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box'
  },
  'h1, h2, h3, h4, h5, h6': {
    fontFamily: '$highlight',
    color: '$neutralColor-100'
  },
  html: {
    colorScheme: 'dark',
    '@lg': {
      fontSize: '93.75%'
    },

    '@md': {
      fontSize: '87.5%'
    }
  },
  body: {
    background: '$neutralColor-900',
    color: '$neutralColor-200',
    fontFamily: '$default'
  },
  'body, input, textarea, select, button': {
    fontFamily: '$default',
    fontWeight: 'normal',
    fontSize: '$md'
  }
})
