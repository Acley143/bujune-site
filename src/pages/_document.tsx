import Document, { Html, Head, Main, NextScript } from 'next/document';
import { getInitColorSchemeScript } from '@mui/material/styles';

/**
 * Make sure no SSR flash for color scheme - as we use system on startup
 */
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body id="mw-app">
          {getInitColorSchemeScript({ defaultMode: 'system' })}
          <Main />
          <NextScript />
        </body>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Html>
    );
  }
}
