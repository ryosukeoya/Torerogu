import type { NextPage } from 'next';
import React, { VFC } from 'react';
import BodyInfoPage from './BodyInfoPage';
import TrainingPage from './TrainingPage';
import { SwiperContainer } from '~/components/entryPoint';

const Plan: NextPage<VFC> = () => {
  return (
    <SwiperContainer>
      <BodyInfoPage pageIndex={0} />
      <TrainingPage pageIndex={1} />
    </SwiperContainer>
  );
};

export default Plan;
