import Image from 'next/image';
import React from 'react';
import type { VFC } from 'react';
import { css } from '@emotion/react';
import Tabs from './HeaderTabs';
import { APP } from '../../constants';
import { BORDER, COLOR, FONT } from '../../styles/const';

const Header: VFC = () => {
  return (
    <header css={styles.header}>
      <div css={styles.area}>
        <h1 css={styles.title}>{APP.NAME}</h1>
        <p css={styles.profile}>
          <Image src='/imgs/profile.png' width={28} height={28} alt={'プロフィール'} />
        </p>
      </div>
      <Tabs />
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
    border-bottom: 1px solid ${BORDER.GRAY};
    padding: 10px 25px 0 25px;
  `,
  area: css`
    text-align: center;
  `,
  title: css`
    font-size: ${FONT.X2_LARGE};
    color: ${COLOR.RED};
    display: inline-block;
  `,
  profile: css`
    float: right;
    border-radius: 50%;
    background-color: #b6babb;
    padding: 8px;
  `,
};
