import type { NextPage } from 'next';
import React, { VFC } from 'react';
import BodyInfoPage from './BodyInfoPage';
import TrainingPage from './TrainingPage';
import { SwiperWrapper } from '~/components';
import { useGetElementWidth } from '~/hooks';
import { PageLayout } from '~/layout';
import { useAuth0 } from '@auth0/auth0-react';
import AuthenticationPage from '../AuthenticationPage';

const Plan: NextPage<VFC> = () => {
  const [elm, mainContentWidth] = useGetElementWidth<HTMLDivElement>();
  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) return <AuthenticationPage />;

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
