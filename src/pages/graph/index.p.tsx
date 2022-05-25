import React, { VFC } from 'react';
import { SliderWrapper, Loading } from '~/components';
import { useQuery } from '@apollo/client';
import { GetTrainingWithBodyInfoDocument, GetTrainingWithBodyInfoQuery } from '~/libs/graphql/generated/graphql';
import { PageLayout } from '~/layout';
import { useGetElementWidth } from '~/hooks';
import { default as BodyFatPercentagePage } from './BodyFatPercentagePage';
import { default as TrainingPage } from './TrainingPage';
import { default as WeightPage } from './WeightPage';

const Graph: VFC = () => {
  const { data, loading, error } = useQuery<GetTrainingWithBodyInfoQuery>(GetTrainingWithBodyInfoDocument, {
    fetchPolicy: 'cache-and-network',
  });
  const [ref, mainContentWidth] = useGetElementWidth<HTMLDivElement>(loading);

  if (loading) return <Loading />;
  if (error) throw new Error(error.message);

  return (
    <div ref={ref}>
      <PageLayout mainContentWidth={mainContentWidth}>
        <SliderWrapper>
          <WeightPage bodyInfo={data?.body_info_data_histories} />
          <BodyFatPercentagePage />
          <TrainingPage />
        </SliderWrapper>
      </PageLayout>
    </div>
  );
};

export default Graph;
