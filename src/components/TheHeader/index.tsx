import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import type { VFC } from 'react';
import { css, keyframes } from '@emotion/react';
import Tabs from './Tabs';
import { APP } from '~/constants';
import { COLOR, FONT } from '~/styles/const';
import { useRecoilState } from 'recoil';
import { headerTabIndexAtom } from '~/store';
import { useIsScrollDown } from '~/hooks';

const Header: VFC = () => {
  const [activeIndex, setActiveIndex] = useRecoilState<number>(headerTabIndexAtom);
  const [fade, setFade] = useState(false);

  const isScrollDown: boolean = useIsScrollDown();
  const headerStateCss = isScrollDown ? stateCss['hidden'] : stateCss['visible'];

  return (
    <header css={[styles.header, headerStateCss]}>
      <div css={styles.area}>
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
        <p css={styles.profile}>
          <Image src='/imgs/profile.png' width={28} height={28} alt={'プロフィール'} />
        </p>
      </div>
      <Tabs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </header>
  );
};

export default Header;

const styles = {
  header: css`
    position: fixed;
    top: 0;
    z-index: 1000;
    background: #fff;
    width: 100vw;
    border-bottom: 1px solid ${COLOR.BORDER_GRAY};
    padding: 10px 25px 0 25px;
  `,
  area: css`
    text-align: center;
  `,
  title: css`
    padding: 5px 9px;
    font-size: ${FONT.X2_LARGE};
    color: ${COLOR.RED};
    display: inline-block;
    cursor: pointer;
  `,
  profile: css`
    float: right;
    border-radius: 50%;
    background-color: #b6babb;
    padding: 8px;
  `,
};

const stateCss = {
  visible: css`
    transition: top 0.1s ease-out;
  `,
  hidden: css`
    top: -55px;
    transition: top 0.1s ease-out;
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
