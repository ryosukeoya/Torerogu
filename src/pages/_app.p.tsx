import type { AppProps } from 'next/app';
import React from 'react';
import '~/styles/globals.css';
import '~/styles/reset.css';
import { useNprogress as progressBar } from '../hooks';
import { Layout } from '../layouts';
import { RecoilRoot } from 'recoil';
import { ErrorBoundary } from 'react-error-boundary';
import { Auth0AuthorizationHandler, ApolloProviderWithAuth0Token, ErrorFallback } from '~/components';
import { Auth0Provider } from '@auth0/auth0-react';

function MyApp({ Component, pageProps }: AppProps) {
  progressBar();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <RecoilRoot>
        <Auth0Provider domain={process.env['NEXT_PUBLIC_AUTH0_DOMAIN'] as string} clientId={process.env['NEXT_PUBLIC_AUTH0_CLIENT_ID'] as string} redirectUri={typeof window !== 'undefined' ? window.location.origin : undefined} audience={process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT}>
          <ApolloProviderWithAuth0Token>
            <Auth0AuthorizationHandler>
              <Layout>
                <Component {...pageProps} />
              </Layout>
            </Auth0AuthorizationHandler>
          </ApolloProviderWithAuth0Token>
        </Auth0Provider>
      </RecoilRoot>
    </ErrorBoundary>
  );
}

export default MyApp;
