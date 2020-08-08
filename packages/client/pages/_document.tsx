import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import React from 'react';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" type="image/x-icon" href="/favicon.png" />
        </Head>
        <body style={{margin:0, padding:0}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
