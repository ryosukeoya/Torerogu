import type { NextPage } from 'next';
import React, { VFC } from 'react';
import BodyInfoPage from './BodyInfoPage';
import TrainingPage from './TrainingPage';
import { Slider } from '~/components';
import { PageLayout } from '~/layout';
import { Auth0AuthorizationHandler } from '~/components/Auth0AuthorizationHandler';
import { useGetElementWidth } from '../../hooks';

const Plan: NextPage<VFC> = () => {
  const [ref, mainContentWidth] = useGetElementWidth<HTMLDivElement>();

  return (
    <div ref={ref}>
      <Auth0AuthorizationHandler>
        <PageLayout mainContentWidth={mainContentWidth}>
          <Slider>
            <BodyInfoPage pageIndex={0} />
            <TrainingPage pageIndex={1} />
          </Slider>
        </PageLayout>
      </Auth0AuthorizationHandler>
    </div>
  );
};

export default Plan;
