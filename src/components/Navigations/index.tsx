import React, { VFC } from 'react';
import Tab from './Tab';
import { PAGE_PATH } from '~/constants/index';
import type { PageTitles, PageTitle } from '~/types/index';
import { css } from '@emotion/react';
import { BORDER, BREAKPOINT } from '~/styles/const';
import useActiveIndexFromPath from '~/hooks/useActiveIndexFromPath';

const BottomNav: VFC = () => {
  const [activeIndex, setActiveIndex] = useActiveIndexFromPath();
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
    z-index: 1000;
    background: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 65px;
    border-top: 1px solid ${BORDER.GRAY};
    @media (min-width: ${BREAKPOINT.MD}) {
      position: static;
      z-index: auto;
      flex-direction: column;
      justify-content: flex-start;
      margin-top: calc(104px + 20px);
      height: 100vh;
      width: 30%;
      padding: 20px 0 0 10px;
      /* background-color: #fdffdf; */
      border-top: 0;
      border-right: 1px  solid ${BORDER.GRAY};
    }
  `,
};
