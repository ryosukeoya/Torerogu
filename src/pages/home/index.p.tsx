import type { NextPage } from 'next';
import { GetTrainingOneTypeDocument, GetTrainingOneTypeQuery, GetTrainingOneTypeQueryVariables } from '~/libs/graphql/generated/graphql';
import { useQuery } from '@apollo/client';
// import { getStringTypeDate } from '~/utils';
import HomePage from './HomePage';
import SchedulePage from './SchedulePage';
import { useGetElementWidth } from '~/hooks';
import { PageLayout } from '~/layouts';
// import '~/tests/mocks/starter';
import { SliderWrapper, Loading } from '~/components';
import { useSetRecoilState } from 'recoil';
import { isAuthenticatedAtom } from '~/store/atoms';
import { useEffect } from 'react';
import { getNextDayDate, getStringTypeDate } from '~/utils';

const Home: NextPage = () => {
  // FIXME: タイムゾーン？
  const { data, error, loading } = useQuery<GetTrainingOneTypeQuery>(GetTrainingOneTypeDocument, {
    variables: { gteDate: getStringTypeDate(new Date()), lteDate: getStringTypeDate(getNextDayDate(new Date())) } as GetTrainingOneTypeQueryVariables,
    fetchPolicy: 'network-only',
  });
  const [ref, mainContentWidth] = useGetElementWidth<HTMLDivElement>(data);
  const setIsAuthenticated = useSetRecoilState(isAuthenticatedAtom);

  useEffect(() => {
    setIsAuthenticated(true);
  });

  if (loading) return <Loading />;
  if (error) throw new Error(error.message);

  return (
    <div ref={ref}>
      <PageLayout mainContentWidth={mainContentWidth}>
        <SliderWrapper>
          <HomePage data={data} />
          <SchedulePage />
        </SliderWrapper>
      </PageLayout>
    </div>
  );
};

export default Home;
