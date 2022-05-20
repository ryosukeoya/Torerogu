import type { VFC, ReactNode } from 'react';
import { pageTemplate } from '~/styles/shares/pageTemplate';
import { ApolloError } from '@apollo/client';

type Props = {
  children: ReactNode;
  error: ApolloError | undefined;
  loading: boolean;
};

export const LoginStateHandler: VFC<Props> = ({ children, error, loading }) => {
  if (loading) {
    return (
      <div css={pageTemplate.contentArea} data-testid='loading'>
        <p>Loading...</p>
      </div>
    );
  }
  if (error) throw new Error(error.message);

  return <div>{children}</div>;
};
