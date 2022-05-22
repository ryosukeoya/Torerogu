import Link from 'next/link';
import React, { useState, VFC } from 'react';
import { css, keyframes } from '@emotion/react';
import { APP } from '~/constants';
import { COLOR, FONT } from '~/styles/const';
import { mainTabIndexAtom } from '~/store/atoms';
import { useSetRecoilState } from 'recoil';

export const Title: VFC = () => {
  const setActiveIndex = useSetRecoilState<number>(mainTabIndexAtom);
  const [fade, setFade] = useState(false);

  return (
    <h1 css={[styles.title, fade ? fadeAnimation : null]} onClick={() => setFade(true)} onAnimationEnd={() => setFade(false)}>
      <Link href='/' passHref>
        <a
          onClick={() => {
            setActiveIndex(0);
          }}
        >
          {APP.NAME}
        </a>
      </Link>
    </h1>
  );
};

const styles = {
  title: css`
    padding: 5px 9px;
    font-size: ${FONT.X2_LARGE};
    color: ${COLOR.RED};
    display: inline-block;
    cursor: pointer;
    /* &:active {
      color: #ff7369;
    } */
  `,
};

const effect = keyframes`
  0% {
    color:#ff7369;
    opacity: 0.8;
  }
  50% {
    color:#ff7369;
    opacity: 0.75;
  }
  100% {
    color:#ff7369;
    opacity: 0.8;
  }
`;

const fadeAnimation = css`
  animation: 0.17s ease 0s forwards ${effect};
`;
