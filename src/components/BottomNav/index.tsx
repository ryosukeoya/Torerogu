import { useRouter } from 'next/router';
import React, { VFC, useState, useEffect } from 'react';
import Tab from './BottomNavTab';
import { PAGE_PATH } from '../../constants/index';
import type { PageTitles, PageTitle } from '../../types/index';
import { getPathIndex } from '../../enum';
import { css } from '@emotion/react';
import { BORDER } from '../../styles/const';

const BottomNav: VFC = () => {
  const router = useRouter();
  const pathIndex = getPathIndex(router.pathname);
  const [activeIndex, setActiveIndex] = useState<number>(pathIndex);

  const titles = Object.keys(PAGE_PATH) as PageTitles;

  useEffect(() => {
    setActiveIndex(pathIndex);
  }, [pathIndex]);

  return (
    <nav css={styles.bottomNav}>
      {titles.map((title: PageTitle, i: number) => {
        return <Tab isResetIndex={true} key={i} index={i} title={title} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />;
      })}
    </nav>
  );
};

export default BottomNav;

const styles = {
  bottomNav: css`
    box-size: border-box;
    position: fixed;
    bottom: 0;
    z-index:1000;
    background:white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 65px;
    border-top: 1px solid ${BORDER.GRAY};,
  `,
};
