import type { VFC } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { RippleButton } from '~/components';
import { pageTemplate } from '~/styles/shares/pageTemplate';

const AuthenticationPage: VFC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <div css={pageTemplate.contentArea}>
        <p>ログイン画面</p>
        <RippleButton title='ログイン' onClick={() => loginWithRedirect()} />
        <RippleButton title='新規登録' onClick={() => loginWithRedirect({ screen_hint: 'signup' })} />
      </div>
    </>
  );
};

export default AuthenticationPage;
