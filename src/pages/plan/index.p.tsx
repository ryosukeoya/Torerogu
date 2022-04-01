import type { NextPage } from 'next';
import React, { VFC } from 'react';
import BodyInfoPage from './BodyInfoPage';
import TrainingPage from './TrainingPage';
import { SwiperContainer, PrimaryNavigation2 } from '~/components';
import { BREAKPOINT } from '~/styles/const';
import { useGetTitle } from '~/hooks';
import { css } from '@emotion/react';

const Plan: NextPage<VFC> = () => {
  return (
    <>
      <PrimaryNavigation2
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
      <SwiperContainer>
        <BodyInfoPage pageIndex={0} />
        <TrainingPage pageIndex={1} />
      </SwiperContainer>
    </>
  );
};

export default Plan;
