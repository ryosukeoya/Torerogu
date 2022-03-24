import React, { VFC } from 'react';
import Tab from './Tab';
import { PAGE_TITLE } from '~/constants/index';
import type { PageTitle } from '~/types/index';
import { css } from '@emotion/react';
import { COLOR, BREAKPOINT } from '~/styles/const';
import { useActiveIndexFromPath } from '~/hooks';

const Navigation: VFC = () => {
  const [activeIndex, setActiveIndex] = useActiveIndexFromPath();

  return (
    <nav css={styles.navigation}>
      {PAGE_TITLE.map((title: PageTitle, i: number) => {
        return <Tab isResetIndex={true} key={i} index={i} title={title} activeIndex={activeIndex} setActiveIndex={setActiveIndex} isToggle />;
      })}
    </nav>
  );
};

export default Navigation;

const styles = {
  navigation: css`
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
    border-top: 1px solid ${COLOR.BORDER_GRAY};
    @media (min-width: ${BREAKPOINT.MD}) {
      position: static;
      z-index: auto;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin-top: calc(104px + 20px);
      height: 100vh;
      width: 30%;
      padding: 20px 0 0 10px;
      border-top: 0;
      border-right: 1px solid ${COLOR.BORDER_GRAY};
    }
  `,
};
