import { Html, Head, Main, NextScript } from 'next/document';
const MyDocument = () => {
  return (
    <Html lang='ja-JP'>
      <Head>
        {/* favicon,icon */}
        <link rel='shortcut icon' type='image/x-icon' href='/icons/favicon.ico' sizes='192x192' />
        <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon180x180.png' />
        <link rel='icon' type='image/png' href='/icons/android-touch-icon192x192.png' />
        <link rel='stylesheet' href='https://unpkg.com/swiper/swiper-bundle.min.css' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
