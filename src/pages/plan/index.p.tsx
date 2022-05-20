import type { NextPage } from 'next';
import React, { VFC } from 'react';
import BodyInfoPage from './BodyInfoPage';
import TrainingPage from './TrainingPage';
import { SwiperWrapper } from '~/components';
import { useGetElementWidth } from '~/hooks';
import { PageLayout } from '~/layout';
import { Auth0AuthorizationHandler } from '~/components/Auth0AuthorizationHandler';

const Plan: NextPage<VFC> = () => {
  const [elm, mainContentWidth] = useGetElementWidth<HTMLDivElement>();

  return (
    <Auth0AuthorizationHandler>
      <PageLayout mainContentWidth={mainContentWidth}>
        <SwiperWrapper elm={elm}>
          <BodyInfoPage pageIndex={0} />
          <TrainingPage pageIndex={1} />
        </SwiperWrapper>
      </PageLayout>
    </Auth0AuthorizationHandler>
  );
};

export default Plan;
