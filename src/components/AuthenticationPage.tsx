import Image from 'next/Image';
import type { VFC } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { RippleButton } from '~/components';
import { pageTemplate } from '~/styles/shares/pageTemplate';
import { css } from '@emotion/react';

const AuthenticationPage: VFC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div css={pageTemplate.contentArea}>
      <p>ログイン画面</p>
      <RippleButton title='ログイン' onClick={() => loginWithRedirect()} />
      <RippleButton title='新規登録' onClick={() => loginWithRedirect({ screen_hint: 'signup' })} />
      <div css={styles.section}>
        <Image src='/imgs/hoge' width={450} height={350} />
        <p>トレーニングアプリのトレログを作りました。体重、体脂肪率、トレーニングの記録の追加トレーニングの予定の追加ができます</p>
      </div>
      <div css={styles.section}>
        <Image src='/imgs/hoge' width={450} height={350} />
        <p>カレンダー表示からスケージュールの確認ができます</p>
      </div>
      <div css={styles.section}>
        <Image src='/imgs/hoge' width={450} height={350} />
        <p>体重のグラフを表示することができます</p>
      </div>
    </div>
  );
};

export default AuthenticationPage;

const styles = {
  section: css`
    padding-bottom: 20px;
  `,
};
