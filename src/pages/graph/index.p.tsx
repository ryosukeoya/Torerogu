import React, { VFC } from 'react';
import { Slider, Auth0AuthorizationHandler, ApolloStateHandler } from '~/components';
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

  return (
    <div ref={ref}>
      <Auth0AuthorizationHandler>
        <ApolloStateHandler error={error} loading={loading}>
          <PageLayout mainContentWidth={mainContentWidth}>
            <Slider>
              <WeightPage bodyInfo={data?.body_info_data_histories} />
              <BodyFatPercentagePage />
              <TrainingPage />
            </Slider>
          </PageLayout>
        </ApolloStateHandler>
      </Auth0AuthorizationHandler>
    </div>
  );
};

export default Graph;
