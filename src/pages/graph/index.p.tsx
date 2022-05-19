import React, { VFC } from 'react';
import { SwiperWrapper } from '~/components';
import { useQuery } from '@apollo/client';
import { GetTrainingWithBodyInfoDocument, GetTrainingWithBodyInfoQuery } from '~/libs/graphql/generated/graphql';
import { PageLayout } from '~/layout';
import { pageTemplate } from '~/styles/shares/pageTemplate';
import { useGetElementWidth } from '~/hooks';
import { default as BodyFatPercentagePage } from './BodyFatPercentagePage';
import { default as TrainingPage } from './TrainingPage';
import { default as WeightPage } from './WeightPage';
import { useAuth0 } from '@auth0/auth0-react';
import AuthenticationPage from '../AuthenticationPage';

const Graph: VFC = () => {
  const { data, loading, error } = useQuery<GetTrainingWithBodyInfoQuery>(GetTrainingWithBodyInfoDocument, {
    fetchPolicy: 'cache-and-network',
  });
  const [elm, mainContentWidth] = useGetElementWidth<HTMLDivElement>(loading);

  const { isAuthenticated } = useAuth0();

  if (!isAuthenticated) return <AuthenticationPage />;

  if (loading) {
    return (
      <div css={pageTemplate.contentArea} data-testid='loading'>
        <p>Loading...</p>
      </div>
    );
  }
  if (error) throw new Error(error.message);

  return (
    <PageLayout mainContentWidth={mainContentWidth}>
      <SwiperWrapper elm={elm}>
        <WeightPage bodyInfo={data?.body_info_data_histories} />
        <BodyFatPercentagePage />
        <TrainingPage />
      </SwiperWrapper>
    </PageLayout>
  );
};

export default Graph;
