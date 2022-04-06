import type { NextPage } from 'next';
import React, { VFC } from 'react';
import BodyInfoPage from './BodyInfoPage';
import TrainingPage from './TrainingPage';
import { SwiperWrapper, PrimaryNavigationGlobalState } from '~/components';
import { BREAKPOINT } from '~/styles/const';
import { useGetElementWidth, useGetTabTitleFromRoute } from '~/hooks';
import { css } from '@emotion/react';

const Plan: NextPage<VFC> = () => {
  const tabNames = useGetTabTitleFromRoute();
  const [elm, mainContentWidth] = useGetElementWidth<HTMLDivElement>();

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
      <SwiperWrapper elm={elm}>
        <BodyInfoPage pageIndex={0} />
        <TrainingPage pageIndex={1} />
      </SwiperWrapper>
    </>
  );
};

export default Plan;
