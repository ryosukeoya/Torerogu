import { Html, Head, Main, NextScript } from 'next/document';
import { CommonHead } from '~/components';

const MyDocument = () => {
  return (
    <Html lang='ja-JP'>
      <Head>
        <CommonHead />
      </Head>
      <body>
        <Main />
        <div id='modal' />
        <NextScript />
      </body>
    </Html>
  );
};

export default MyDocument;
