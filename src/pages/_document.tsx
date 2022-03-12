import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'

import { getCssText } from '../../stitches.config'

const META_TAGS_SETTINGS = {
  TITLE: 'Painty',
  DESCRIPTION:
    'Painty is a simple tool to help you to calculate the quantity of paint needed to paint a room.',
  THUMBNAIL_URL: 'https://painty.vercel.app/thumbnail.png',
  URL: 'https://painty.vercel.app',
  KEYWORDS: [
    'paint',
    'painting',
    'room',
    'room painting',
    'room painting calculator'
  ]
}

export default class Document extends NextDocument {
  render(): JSX.Element {
    return (
      <Html lang="pt-BR">
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="use-credentials"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
          <link rel="icon" type="image/png" href="favicon.png" />

          {/* Meta tags */}

          <meta name="robots" content="all" />

          <meta name="title" content={META_TAGS_SETTINGS.TITLE} />
          <meta name="description" content={META_TAGS_SETTINGS.DESCRIPTION} />
          <meta
            name="keywords"
            content={META_TAGS_SETTINGS.KEYWORDS.join(', ')}
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content={META_TAGS_SETTINGS.URL} />
          <meta property="og:title" content={META_TAGS_SETTINGS.TITLE} />
          <meta
            property="og:description"
            content={META_TAGS_SETTINGS.DESCRIPTION}
          />
          <meta
            property="og:image"
            content={META_TAGS_SETTINGS.THUMBNAIL_URL}
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content={META_TAGS_SETTINGS.URL} />
          <meta property="twitter:title" content={META_TAGS_SETTINGS.TITLE} />
          <meta
            property="twitter:description"
            content={META_TAGS_SETTINGS.DESCRIPTION}
          />
          <meta
            name="twitter:image"
            content={META_TAGS_SETTINGS.THUMBNAIL_URL}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
