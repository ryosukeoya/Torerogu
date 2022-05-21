import type { NextPage } from 'next';
import React, { VFC } from 'react';
import BodyInfoPage from './BodyInfoPage';
import TrainingPage from './TrainingPage';
import { Slider } from '~/components';
import { PageLayout } from '~/layout';
import { useGetElementWidth } from '../../hooks';

const Plan: NextPage<VFC> = () => {
  const [ref, mainContentWidth] = useGetElementWidth<HTMLDivElement>();

  return (
    <div ref={ref}>
      <PageLayout mainContentWidth={mainContentWidth}>
        <Slider>
          <BodyInfoPage pageIndex={0} />
          <TrainingPage pageIndex={1} />
        </Slider>
      </PageLayout>
    </div>
  );
};

export default Plan;
