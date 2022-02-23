import Head from 'next/head';
import React, { FC } from 'react';
import { HEAD } from '../constants/head';
import { Header, BottomNav } from '../components/_indexs';

const Layout: FC = (prop) => {
  return (
    <>
      <Head>
        <meta name='description' content={HEAD.DESC} />
        <meta name='theme-color' content='#333' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content={HEAD.TITLE} />
        <meta property='og:url' content={HEAD.URL} />
        <meta property='og:description' content={HEAD.DESC} />
        <meta property='og:site_name' content={HEAD.TITLE} />
        <meta property='og:image' content={`${HEAD.URL}/ogp.png`} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='format-detection' content='telephone=no' />
        <link rel='apple-touch-icon' href='/apple-touch-icon.png' />
      </Head>
      <Header />
      <main style={{marginTop:'113px'}}>{prop.children}</main>
      <BottomNav />
    </>
  );
};

export default Layout;
