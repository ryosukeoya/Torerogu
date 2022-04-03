import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import type { VFC } from 'react';
import { css, keyframes } from '@emotion/react';
import { APP } from '~/constants';
import { COLOR, FONT, BREAKPOINT } from '~/styles/const';
import { useSetRecoilState } from 'recoil';
import { headerTabIndexAtom } from '~/store';
import { useIsScrollDown } from '~/hooks';
import { PrimaryNavigationGlobalState } from '~/components';
import { useGetTitle } from '~/hooks';
import { HEADER } from '~/styles/const';

const Header: VFC = () => {
  const setActiveIndex = useSetRecoilState<number>(headerTabIndexAtom);
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
      <PrimaryNavigationGlobalState
        titles={useGetTitle() as string[]}
        theme={'basicTab'}
        options={{ isSwiper: true, isToggle: true }}
        customCss={{
          nav: css`
            border-bottom: none;
          `,
          item: css`
            @media (min-width: ${BREAKPOINT.MD}px) {
              visibility: hidden;
            }
          `,
        }}
      />
    </header>
  );
};

export default Header;

const styles = {
  header: css`
    height: ${HEADER.HEIGUT};
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
