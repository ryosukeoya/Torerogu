import React from 'react';
import type { VFC, ReactNode } from 'react';
import { PrimaryNavigationGlobalState } from '~/components';
import { media } from '~/styles/shares';
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
            ${media.sp(css`
              display: none;
            `)}
          `,
        }}
      />
      {mainContentChildren}
    </>
  );
};

export default PageLayout;
