import type { AppProps } from 'next/app';
import React from 'react';
import '../styles/globals.css';
import '../styles/reset.css';
import { useNprogress as progressBar } from '../hooks';
import Layout from '../layout/Layout';
import { ApolloProvider } from '@apollo/client';
import { initializeApollo } from '../libs/graphql/apolloClient';
import { RecoilRoot } from 'recoil';

function MyApp({ Component, pageProps }: AppProps) {
  progressBar();
  const client = initializeApollo();
  return (
    <RecoilRoot>
      <Layout>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Layout>
    </RecoilRoot>
  );
}

export default MyApp;
