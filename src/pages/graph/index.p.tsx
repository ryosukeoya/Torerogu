import React, { VFC } from 'react';
import { Slider, Auth0AuthorizationHandler } from '~/components';
import { useQuery } from '@apollo/client';
import { GetTrainingWithBodyInfoDocument, GetTrainingWithBodyInfoQuery } from '~/libs/graphql/generated/graphql';
import { PageLayout } from '~/layout';
import { pageTemplate } from '~/styles/shares/pageTemplate';
import { useGetElementWidth } from '~/hooks';
import { default as BodyFatPercentagePage } from './BodyFatPercentagePage';
import { default as TrainingPage } from './TrainingPage';
import { default as WeightPage } from './WeightPage';

const Graph: VFC = () => {
  const { data, loading, error } = useQuery<GetTrainingWithBodyInfoQuery>(GetTrainingWithBodyInfoDocument, {
    fetchPolicy: 'cache-and-network',
  });
  const [ref, mainContentWidth] = useGetElementWidth<HTMLDivElement>(loading);

  if (loading) {
    return (
      <div css={pageTemplate.contentArea} data-testid='loading'>
        <p>Loading...</p>
      </div>
    );
  }
  if (error) throw new Error(error.message);

  return (
    <div ref={ref}>
      <Auth0AuthorizationHandler>
        <PageLayout mainContentWidth={mainContentWidth}>
          <Slider>
            <WeightPage bodyInfo={data?.body_info_data_histories} />
            <BodyFatPercentagePage />
            <TrainingPage />
          </Slider>
        </PageLayout>
      </Auth0AuthorizationHandler>
    </div>
  );
};

export default Graph;
