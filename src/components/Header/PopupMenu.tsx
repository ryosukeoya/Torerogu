import type { VFC, Dispatch, SetStateAction } from 'react';
import { css, keyframes } from '@emotion/react';
import { User, LogoutOptions } from '@auth0/auth0-react';
import { COLOR } from '~/styles/const';
import { media } from '~/styles/shares';
import LogoutIcon from '/public/icons/logoutIcon.svg';

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  user: User | undefined;
  logout: (options?: LogoutOptions | undefined) => void;
};

// FIXME
// 日本語化
// 縦揃ってない

export const PopupMenu: VFC<Props> = ({ setIsOpen, user, logout }) => {
  return (
    <>
      <div onClick={() => setIsOpen(false)} css={styles.backdrop}>
        <div css={styles.modal} onClick={(e) => e.stopPropagation()}>
          <h2 css={styles.name}>{user?.name}</h2>
          <p css={styles.email}>{user?.email}</p>
          <div css={styles.line}></div>
          <div css={styles.logout} onClick={() => logout({ returnTo: window.location.origin })}>
            <LogoutIcon />
            <p css={styles.logoutTitle}>ログアウト</p>
          </div>
        </div>
      </div>
    </>
  );
};

const modalEffect = keyframes`
  0% {
    transform: scale(0.85);
    opacity: 0.85;
  }
  50% {
    transform: scale(0.96);
    opacity: 0.96;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const styles = {
  backdrop: css`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    min-height: 100vh;
    min-width: 100vw;
    height: 100%;
    width: 100%;
    cursor: pointer;
  `,
  modal: css`
    position: absolute;
    top: 70px;
    right: 20px;
    margin: auto;
    min-width: 240px;
    max-width: 80vw;
    border-radius: 25px;
    padding: 20px 20px;
    text-align: left;
    background-color: #fff;
    z-index: 1;
    border: 1px solid #dedede;
    box-shadow: 0 1px 5px 1px rgba(171, 171, 171, 0.2); //x軸 y軸 ぼかし 広がり カラー;
    animation: 50ms ease 0s forwards ${modalEffect};
    cursor: default;
    & > * {
      padding: 10px 0;
      border-radius: 10px;
      cursor: pointer;
      @media (hover: hover) {
        &:hover {
          background-color: ${COLOR.HOVER_GRAY};
        }
      }
    }
    ${media.pc(css`
      right: 30px;
      width: 300px;
      & > * {
        padding: 10px;
      }
    `)}
  `,
  name: css`
    font-family: initial;
    font-weight: 500;
    padding: 0;
    cursor: default;
    &:hover {
      background-color: inherit;
    }
    ${media.pc(css`
      padding: 0 10px;
    `)}
  `,
  email: css`
    color: gray;
    cursor: default;
    &:hover {
      background-color: inherit;
    }
  `,
  line: css`
    margin: 5px 0;
    border-radius: 0;
    padding: 0;
    border-top: 1px solid ${COLOR.BORDER_GRAY};
  `,
  logout: css`
    display: flex;
  `,
  logoutTitle: css`
    padding-left: 10px;
  `,
};
