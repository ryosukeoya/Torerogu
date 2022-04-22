import React, { VFC, ReactNode } from 'react';
import { Header, Navigation, CommonHead } from '../components';
import { css } from '@emotion/react';
import { COLOR, HEADER, NAVIGATION, CONTENT_AREA } from '../styles/const';
import { media } from '../styles/shares';

type Props = {
  children: ReactNode;
};

const Layout: VFC<Props> = ({ children }) => {
  return (
    <>
      <CommonHead />
      <Header />
      <div css={styles.pcContentArea}>
        <Navigation />
        <main css={styles.mainContent}>{children}</main>
      </div>
    </>
  );
};

export default Layout;

const styles = {
  pcContentArea: media.pc(css`
    display: flex;
    width: 80vw;
    min-width: 800px;
    max-width: 1300px;
    margin: 0 auto;
  `),
  mainContent: css`
    min-height: 100vh;
    margin-top: ${HEADER.HEIGUT};
    ${media.pc(css`
      width: calc(100% - ${NAVIGATION.WIDTH});
      margin-left: ${NAVIGATION.WIDTH};
      border-left: 1px solid ${COLOR.BORDER_GRAY};
      border-right: 1px solid ${COLOR.BORDER_GRAY};
      @media (max-width: ${CONTENT_AREA.PC_MIN_WIDTH}) {
        width: calc(100% - ${NAVIGATION.WIDTH2});
        margin-left: ${NAVIGATION.WIDTH2};
      }
    `)}
  `,
};
