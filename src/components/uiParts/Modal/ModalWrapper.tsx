import type { VFC, ReactNode } from 'react';
import { css, keyframes } from '@emotion/react';
import { Portal } from '../../Portal';
import { SetterOrUpdater } from 'recoil';
import { media } from '~/styles/shares';
import { Z_INDEX } from '~/styles/const';

type Props = {
  isOpen: boolean;
  setIsOpen: SetterOrUpdater<boolean>;
  children: ReactNode;
};

export const ModalWrapper: VFC<Props> = ({ isOpen, setIsOpen, children }) => {
  if (!isOpen) return null;

  return (
    <Portal>
      <div onClick={() => setIsOpen((prev) => !prev)} css={styles.backdrop}>
        <div css={styles.modal}>{children}</div>
      </div>
    </Portal>
  );
};

const modalEffect = keyframes`
  0% {
    transform: scale(0.6);
    opacity: 0.3;
  }
  50% {
    transform: scale(0.85);
    opacity: 0.7;
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
    z-index: ${Z_INDEX.MODAL_BACKDROP};
    min-height: 100vh;
    min-width: 100vw;
    height: 100%;
    width: 100%;
    background-color: #717171b3;
    cursor: pointer;
  `,
  modal: css`
    max-height: 500px;
    max-width: 500px;
    width: 93vw;
    height: 93vw;
    border-radius: 25px;
    padding: 30px;
    background-color: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 1;
    border: 1px solid #dedede;
    overflow-y: scroll;
    box-shadow: 0 5px 15px 3px rgba(0, 0, 0, 0.2); //x軸 y軸 ぼかし 広がり カラー;
    animation: 0.2s ease 0s forwards ${modalEffect};
    cursor: default;
    ${media.spHorizontal(
      css`
        max-height: 100vh;
      `,
    )}
  `,
};
