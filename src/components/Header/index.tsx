import Image from 'next/image';
import React from 'react';
import type { VFC } from 'react';
import { styles } from './style';
import Tabs from './Tabs';
import { APP_NAME } from '../../constants';

const Header: VFC = () => {
  return (
    <header css={styles.header}>
      <div css={styles.area}>
        <h1 css={styles.title}>{APP_NAME}</h1>
        <p css={styles.profile}>
          <Image src='/imgs/profile.png' width={28} height={28} alt={'プロフィール'} />
        </p>
      </div>
      <Tabs />
    </header>
  );
};

export default Header;
