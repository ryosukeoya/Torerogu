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
  const { data, loading, error } = useQuery<GetTrainingWithBodyInfoQuery>(GET_TRAINING_WITH_BODY_INFO);
  const [elm, mainContentWidth] = useGetElementWidth<HTMLDivElement>(loading);

  if (loading) {
    return (
      <div css={pageTemplate.contentArea}>
        <p>Loading...</p>
      </div>
    );
  }
  if (error) return <p>Error: {error.message}</p>;

  return (
    <PageLayout mainContentWidth={mainContentWidth}>
      <SwiperWrapper elm={elm}>
        <WeightPage data={data} />
        <BodyFatPercentagePage />
        <TrainingPage />
      </SwiperWrapper>
    </PageLayout>
  );
};

export default Graph;
