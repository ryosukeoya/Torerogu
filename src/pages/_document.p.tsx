import { Html, Head, Main, NextScript } from 'next/document';

const MyDocument = () => {
  return (
    <Html lang='ja-JP'>
      <Head>
        {/* favicon,icon */}
        <link rel='shortcut icon' type='image/x-icon' href='/icons/favicon.ico' sizes='192x192' />
        <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
        <link rel='icon' type='image/png' href='/icons/android-touch-icon.png' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
