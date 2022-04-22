import React, { VFC } from 'react';
import { SwiperWrapper } from '~/components';
import { useQuery } from '@apollo/client';
import { GET_TRAINING_WITH_BODY_INFO } from '~/libs/graphql/queries';
import type { GetTrainingWithBodyInfoQuery } from '~/types/generated/graphql';
import { PageLayout } from '~/layout';
import { pageTemplate } from '~/styles/shares/pageTemplate';
import { useGetElementWidth } from '~/hooks';
import { default as BodyFatPercentagePage } from './BodyFatPercentagePage';
import { default as TrainingPage } from './TrainingPage';
import { default as WeightPage } from './WeightPage';

const Graph: VFC = () => {
  const { data, loading, error } = useQuery<GetTrainingWithBodyInfoQuery>(GET_TRAINING_WITH_BODY_INFO, {
    fetchPolicy: 'cache-and-network',
  });
  const [elm, mainContentWidth] = useGetElementWidth<HTMLDivElement>(loading);

  if (loading) {
    return (
      <div css={pageTemplate.contentArea}>
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
