import Head from 'next/head';
import React, { FC } from 'react';
import { Header, BottomNav } from '../components/entryPoint';
import { APP } from '../constants';
import { css } from '@emotion/react';
import { BREAKPOINT } from '../styles/const';

const Layout: FC = (prop) => {
  return (
    <>
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
        <link href='https://fonts.googleapis.com/css2?family=Yomogi&display=swap' rel='stylesheet' />
      </Head>
      <Header />
      <div css={styles.wrap}>
        <BottomNav />
        <main css={styles.main}>{prop.children}</main>
      </div>
    </>
  );
};

export default Layout;

const styles = {
  wrap: css`
    display: flex;
  `,
  main: css`
    min-height: 100vh;
    margin-top: 104px;
    background-color: #fdfdfd;
    @media (min-width: ${BREAKPOINT.MD}) {
      width: 70%;
    }
  `,
};
