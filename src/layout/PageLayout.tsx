import React from 'react';
import type { VFC, ReactNode } from 'react';
import { PrimaryNavigationGlobalState } from '~/components';
import { BREAKPOINT } from '~/styles/const';
import { css } from '@emotion/react';
import { useGetTabTitleFromRoute } from '~/hooks';

type Props = {
  mainContentWidth?: number | undefined;
  children: ReactNode;
};

const PageLayout: VFC<Props> = ({ mainContentWidth, children: mainContentChildren }) => {
  const tabNames = useGetTabTitleFromRoute();

  return (
    <>
      <PrimaryNavigationGlobalState
        titles={tabNames}
        theme='basicTab'
        options={{ isSwiper: true, isToggle: true }}
        width={mainContentWidth}
        customCss={{
          item: css`
            width: 100%;
            @media (max-width: ${BREAKPOINT.MD - 1}px) {
              display: none;
            }
          `,
        }}
      />
      {mainContentChildren}
    </>
  );
};

export default PageLayout;
