import Image from 'next/image';
import type { VFC } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Header, RippleButton, Spacer } from '~/components';
import { css } from '@emotion/react';
import { useSetRecoilState } from 'recoil';
import { isAuthenticatedAtom } from '~/store/atoms';

export const AuthenticationPage: VFC = () => {
  const { loginWithRedirect } = useAuth0();
  const setIsAuthenticated = useSetRecoilState(isAuthenticatedAtom);
  setIsAuthenticated(false);

  return (
    <>
      <Header hasTab={false} />
      <div css={styles.background}>
        <div css={styles.contentArea}>
          <div css={styles.section}>
            <Image css={styles.image} src='/icons/android_touch_icon192x192.png' width={200} height={160} alt='トレログのアイコン' />
            <Spacer height={30} />
            <RippleButton title='ログイン' onClick={() => loginWithRedirect()} />
            <Spacer height={20} />
            <RippleButton title='新規登録' onClick={() => loginWithRedirect({ screen_hint: 'signup' })} />
          </div>
          <div css={styles.section}>
            <Image css={styles.image} src='/imgs/record_training.png' width={300} height={250} layout='responsive' quality={90} objectFit='contain' alt='記録' />
            <p css={styles.explain}>
              トレーニング記録アプリの「トレログ」を作りました!
              <br />
              体重やトレーニングなどの記録を保存することができます、またトレーニングなどの予定を追加することもできます！
            </p>
          </div>
          <div css={styles.section}>
            <Image css={styles.image} src='/imgs/training_scedule.png' width={300} height={250} layout='responsive' quality={90} objectFit='contain' alt='スケジュール' priority />
            <p css={styles.explain}>カレンダーからスケジュールの確認ができます！</p>
          </div>
          <div css={styles.section}>
            <Image css={styles.image} src='/imgs/weight_graph.png' width={300} height={250} layout='responsive' quality={90} objectFit='contain' alt='体重グラフ' priority />
            <p css={styles.explain}>体重グラフで体重の遷移を確認することができます！</p>
          </div>
        </div>
      </div>
    </>
  );
};

const styles = {
  background: css`
    padding-bottom: 100px;
    background-color: #fff3e8;
  `,
  contentArea: css`
    padding-top: 100px;
    width: 90vw;
    max-width: 450px;
    margin: 0 auto;
    text-align: center;
  `,
  section: css`
    width: 100%;
    max-width: 600px;
    display: inline-block;
    padding-bottom: 60px;
  `,
  image: css`
    margin: 0 auto;
  `,
  explain: css`
    margin-top: 15px;
    /* background-color: #25ddc8; */
    /* background-color: #39c668; */
    background-color: #f0c800;
    color: #fff;
    border-radius: 30px;
    padding: 20px;
    line-height: 150%;
  `,
};
