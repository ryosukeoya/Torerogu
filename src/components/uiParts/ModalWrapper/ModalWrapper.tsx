import type { VFC, ReactNode } from 'react';
import { css, keyframes, SerializedStyles } from '@emotion/react';
import type { ModalSizeTheme } from './types';
import Portal from './Portal';
import getModalSize from './getModalSize';
import { SetterOrUpdater } from 'recoil';

type Props = {
  isOpen: boolean;
  setIsOpen: SetterOrUpdater<boolean>;
  size?: ModalSizeTheme;
  children: ReactNode;
};

const ModalWrapper: VFC<Props> = ({ isOpen, setIsOpen, size = 'normal', children }) => {
  if (!isOpen) return null;

  const sizeStyle = getModalSize(size);

  return (
    <Portal>
      <div onClick={() => setIsOpen((prev) => !prev)} css={styles.background}>
        <div css={styles.modal(sizeStyle)}>{children}</div>
      </div>
    </Portal>
  );
};

export default ModalWrapper;

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
  background: css`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10000;
    min-height: 100vh;
    min-width: 100vw;
    height: 100%;
    width: 100%;
    background-color: #717171b3;
  `,
  modal: (size: SerializedStyles) => css`
    ${size};
    background-color: #fff;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 30000;
    border: 1px solid #dedede;
    box-shadow: 0 5px 15px 3px rgba(0, 0, 0, 0.2); //x軸 y軸 ぼかし 広がり カラー;
    animation: 0.3s ease 0s forwards ${modalEffect};
  `,
};
