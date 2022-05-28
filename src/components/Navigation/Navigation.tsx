import React, { VFC } from 'react';
import { Tab } from './Tab';
import { PAGE_TITLE } from '~/constants';
import type { PageTitle } from '~/types';
import { css } from '@emotion/react';
import { COLOR, HEADER, NAVIGATION, CONTENT_AREA, Z_INDEX } from '~/styles/const';
import { useActiveIndexFromPath } from '~/hooks';
import { media } from '~/styles/shares';

export const Navigation: VFC = () => {
  const [activeIndex, setActiveIndex] = useActiveIndexFromPath();

  return (
    <nav css={styles.navigation}>
      {PAGE_TITLE.map((title: PageTitle, i: number) => {
        return <Tab isResetIndex key={i} index={i} title={title} activeIndex={activeIndex} setActiveIndex={setActiveIndex} isToggle />;
      })}
    </nav>
  );
};

const styles = {
  navigation: css`
    // BottomNav
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
    z-index: ${Z_INDEX.NAVIGATION};
    background: white;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100vw;
    height: 65px;
    border-top: 1px solid ${COLOR.BORDER_GRAY};
    ${media.pc(css`
      all: initial; //　スタイルリセット
      // Side bar
      box-sizing: border-box;
      position: fixed;
      top: 0;
      left: auto;
      z-index: ${Z_INDEX.NAVIGATION};
      background: white;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      margin-top: ${HEADER.HEIGUT};
      height: calc(100vh - ${HEADER.HEIGUT});
      width: ${NAVIGATION.WIDTH};
      padding: 60px 0 0 0;
      border-top: 0;
      border-right: 1px solid ${COLOR.BORDER_GRAY};
      @media (max-width: ${CONTENT_AREA.PC_MIN_WIDTH}) {
        width: ${NAVIGATION.SMALL_WIDTH};
        align-items: center;
      }
    `)}
  `,
};
