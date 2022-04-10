import Image from 'next/image';
import React from 'react';
import type { VFC } from 'react';
import { css } from '@emotion/react';
import { COLOR } from '~/styles/const';
import { useIsScrollDown } from '~/hooks';
import { PrimaryNavigationGlobalState } from '~/components';
import { useGetTabTitleFromRoute } from '~/hooks';
import { HEADER } from '~/styles/const';
import { default as Title } from './HeaderTitle';

const Header: VFC = () => {
  const isScrollDown: boolean = useIsScrollDown();
  const headerStateCss = isScrollDown ? stateCss['hidden'] : stateCss['visible'];
  const tabNames = useGetTabTitleFromRoute();

  return (
    <header css={[styles.header, headerStateCss]}>
      <div css={styles.area}>
        <Title />
        <p css={styles.profile}>
          <Image src='/imgs/profile.png' width={28} height={28} alt={'プロフィール'} />
        </p>
      </div>
      <PrimaryNavigationGlobalState
        titles={tabNames}
        theme={'basicTab'}
        options={{ isSwiper: true, isToggle: true }}
        customCss={{
          nav: css`
            border-bottom: none;
          `,
          item: css`
            @media (hover: hover) {
              display: none;
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
    padding: 10px 25px 0 25px;
    border: none;
    @media (hover: hover) {
      border-bottom: 1px solid ${COLOR.BORDER_GRAY};
    }
  `,
  area: css`
    text-align: center;
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
