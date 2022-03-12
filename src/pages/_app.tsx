import type { AppProps } from 'next/app'

import { globalStyles } from '../styles/globalStyles'

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  globalStyles()
  return <Component {...pageProps} />
}
