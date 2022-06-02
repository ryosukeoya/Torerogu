import type { NextPage } from 'next';
import { useState, useEffect } from 'react';
import HomePage from './HomePage';
import SchedulePage from './SchedulePage';
import { useGetElementWidth } from '~/hooks';
import { PageLayout } from '~/layouts';
// import '~/tests/mocks/starter';
import { SliderWrapper, Loading } from '~/components';
import { useSetRecoilState } from 'recoil';
import { isAuthenticatedAtom } from '~/store/atoms';
import { useQuery } from '@apollo/client';
import { GetTrainingTrainingTypeDocument, GetTrainingTrainingTypeQuery } from '~/libs/graphql/generated/graphql';
import { getDataSpecifiedDate } from '~/utils';

const Home: NextPage = () => {
  const { data, error, loading } = useQuery<GetTrainingTrainingTypeQuery>(GetTrainingTrainingTypeDocument, {
    fetchPolicy: 'network-only',
  });
  const [ref, mainContentWidth] = useGetElementWidth<HTMLDivElement>(data);
  const setIsAuthenticated = useSetRecoilState(isAuthenticatedAtom);
  const [trainings, setTrainings] = useState<GetTrainingTrainingTypeQuery['trainings'] | undefined>(data?.trainings);

  useEffect(() => {
    setIsAuthenticated(true);
  });

  useEffect(() => {
    setTrainings(data?.trainings);
  }, [data]);

  if (loading) return <Loading />;
  if (error) throw new Error(error.message);

  return (
    <div ref={ref}>
      <PageLayout mainContentWidth={mainContentWidth}>
        <SliderWrapper>
          <HomePage todaysTrainings={trainings && getDataSpecifiedDate(trainings, new Date())} setTrainings={setTrainings} />
          <SchedulePage trainings={trainings} setTrainings={setTrainings} />
        </SliderWrapper>
      </PageLayout>
    </div>
  );
};

export default Home;
