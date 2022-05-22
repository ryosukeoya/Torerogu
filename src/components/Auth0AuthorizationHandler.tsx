import type { VFC, ReactNode } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Header, AuthenticationPage } from '~/components';
import { pageTemplate } from '~/styles/shares/pageTemplate';
import { Layout } from '../layout';
import { useRecoilValue } from 'recoil';
import { isAuthedAtom } from '~/store/atoms';

type Props = {
  children: ReactNode;
};

export const Auth0AuthorizationHandler: VFC<Props> = ({ children }) => {
  const { isAuthenticated, isLoading } = useAuth0();
  const isAuthed = useRecoilValue(isAuthedAtom);

  if (isLoading) {
    if (isAuthed) {
      return (
        <Layout>
          <div css={pageTemplate.contentArea}>Loading...</div>
        </Layout>
      );
    } else {
      return <Header hasTab />;
    }
  }

  if (!isAuthenticated) {
    return <AuthenticationPage />;
  } else {
    return <div>{children}</div>;
  }
};