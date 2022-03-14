import React, { VFC } from 'react';
import Tab from './Tab';
import { PAGE_PATH } from '../../constants/index';
import type { PageTitles, PageTitle } from '../../types/index';
import { css } from '@emotion/react';
import { BORDER } from '../../styles/const';
import usePathIndex from '../../hooks/usePathIndex';

const BottomNav: VFC = () => {
  const [activeIndex, setActiveIndex] = usePathIndex();
  const titles = Object.keys(PAGE_PATH) as PageTitles;

  return (
    <nav css={styles.bottomNav}>
      {titles.map((title: PageTitle, i: number) => {
        return <Tab isResetIndex={true} key={i} index={i} title={title} activeIndex={activeIndex} setActiveIndex={setActiveIndex} isToggle />;
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
