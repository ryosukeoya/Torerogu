import type { NextPage } from 'next';
import React, { VFC } from 'react';
import BodyInfoPage from './BodyInfoPage';
import TrainingPage from './TrainingPage';
import { SliderWrapper } from '~/components';
import { PageLayout } from '~/layouts';
import { useGetElementWidth } from '../../hooks';

const Plan: NextPage<VFC> = () => {
  const [ref, mainContentWidth] = useGetElementWidth<HTMLDivElement>();

  return (
    <div ref={ref}>
      <PageLayout mainContentWidth={mainContentWidth}>
        <SliderWrapper>
          <BodyInfoPage pageIndex={0} />
          <TrainingPage pageIndex={1} />
        </SliderWrapper>
      </PageLayout>
    </div>
  );
};

export default Plan;
