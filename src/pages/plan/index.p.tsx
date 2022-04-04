import type { NextPage } from 'next';
import React, { VFC } from 'react';
import BodyInfoPage from './BodyInfoPage';
import TrainingPage from './TrainingPage';
import { SwiperWrapper, PrimaryNavigationGlobalState } from '~/components';
import { BREAKPOINT } from '~/styles/const';
import { useGetTitle } from '~/hooks';
import { css } from '@emotion/react';

const Plan: NextPage<VFC> = () => {
  return (
    <>
      <PrimaryNavigationGlobalState
        titles={useGetTitle() as string[]}
        theme='basicTab'
        options={{ isSwiper: true, isToggle: true }}
        customCss={{
          item: css`
            width: 100%;
            @media (max-width: ${BREAKPOINT.MD - 1}px) {
              display: none;
            }
          `,
        }}
      />
      <SwiperWrapper>
        <BodyInfoPage pageIndex={0} />
        <TrainingPage pageIndex={1} />
      </SwiperWrapper>
    </>
  );
};

export default Plan;
