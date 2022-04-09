import type { NextPage } from 'next';
import React, { VFC } from 'react';
import BodyInfoPage from './BodyInfoPage';
import TrainingPage from './TrainingPage';
import { SwiperWrapper } from '~/components';
import { useGetElementWidth } from '~/hooks';
import { PageLayout } from '~/layout';

const Plan: NextPage<VFC> = () => {
  const [elm, mainContentWidth] = useGetElementWidth<HTMLDivElement>();

  return (
    <PageLayout mainContentWidth={mainContentWidth}>
      <SwiperWrapper elm={elm}>
        <BodyInfoPage pageIndex={0} />
        <TrainingPage pageIndex={1} />
      </SwiperWrapper>
    </PageLayout>
  );
};

export default Plan;
