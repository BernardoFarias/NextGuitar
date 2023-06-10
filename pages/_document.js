import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <meta name='description' content="Discover our wide selection of high-quality guitars at affordable 
      prices. From acoustic to electric, we offer a range of styles and brands to suit every 
      player's needs. Shop now and find the perfect instrument to take your music to the next level"/>
      <link rel="stylesheet" href="https://necolas.github.io/normalize.css/8.0.1/normalize.css"/>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
