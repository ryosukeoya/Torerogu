import React from 'react';
import type { VFC } from 'react';
import Head from 'next/head';
import { APP } from '~/constants';

const CommonHead: VFC = () => {
  return (
    <Head>
      <meta name='description' content={APP.DESC} />
      <meta name='theme-color' content='#333' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={APP.NAME} />
      <meta property='og:url' content={process.env.APP_URL} />
      <meta property='og:description' content={APP.DESC} />
      <meta property='og:site_name' content={APP.NAME} />
      <meta property='og:image' content={`${process.env.APP_URL}/ogp.png`} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='format-detection' content='telephone=no' />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link href='https://fonts.googleapis.com/css2?family=Yomogi&display=swap' rel='stylesheet' /> {/* eslint-disable-line @next/next/no-page-custom-font */}
    </Head>
  );
};

export default CommonHead;
