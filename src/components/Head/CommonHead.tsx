import React, { VFC } from 'react';
import { APP } from '~/constants';

export const CommonHead: VFC = () => {
  return (
    <>
      <meta name='description' content={APP.DESC} />
      <meta name='theme-color' content='#333' />
      <meta property='og:type' content='website' />
      <meta property='og:title' content={APP.NAME} />
      <meta property='og:url' content={process.env.NEXT_PUBLIC_BASE_URL} />
      <meta property='og:description' content={APP.DESC} />
      <meta property='og:site_name' content={APP.NAME} />
      <meta property='og:image' content={`${process.env.NEXT_PUBLIC_BASE_URL}/ogp.png`} />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='format-detection' content='telephone=no' />
      <link rel='shortcut icon' type='image/x-icon' href='/icons/favicon.ico' sizes='192x192' />
      <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple_touch_icon180x180.png' />
      <link rel='icon' type='image/png' href='/icons/android_touch_icon192x192.png' />
      <link rel='stylesheet' href='https://unpkg.com/swiper/swiper-bundle.min.css' />
      <link rel='preconnect' href='https://fonts.googleapis.com' />
      <link rel='preconnect' href='https://fonts.gstatic.com' />
      <link href='https://fonts.googleapis.com/css2?family=Yomogi&display=swap' rel='stylesheet' /> {/* eslint-disable-line @next/next/no-page-custom-font */}
    </>
  );
};
