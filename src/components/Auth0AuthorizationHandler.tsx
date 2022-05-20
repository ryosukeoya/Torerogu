import type { VFC, ReactNode } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import AuthenticationPage from '~/components/AuthenticationPage';
import { pageTemplate } from '~/styles/shares/pageTemplate';

type Props = {
  children: ReactNode;
};

export const Auth0AuthorizationHandler: VFC<Props> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div css={pageTemplate.contentArea}>loading...</div>;
  }

  if (!isAuthenticated) {
    return <AuthenticationPage />;
  } else {
    return <div>{children}</div>;
  }
};
