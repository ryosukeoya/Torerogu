import type { NextPage } from 'next';
import { GetTrainingOneTypeDocument, GetTrainingOneTypeQuery } from '~/libs/graphql/generated/graphql';
import { useQuery } from '@apollo/client';
import { getStringTypeDate } from '~/utils/app';
import HomePage from './HomePage';
import SchedulePage from './SchedulePage';
import { useGetElementWidth } from '~/hooks';
import { PageLayout } from '~/layout';
// import '~/tests/mocks/starter';
import { Slider, ApolloStateHandler } from '~/components';

const Home: NextPage = () => {
  const { data, error, loading } = useQuery<GetTrainingOneTypeQuery>(GetTrainingOneTypeDocument, {
    variables: { date: getStringTypeDate(new Date()) },
    fetchPolicy: 'network-only',
  });
  const [ref, mainContentWidth] = useGetElementWidth<HTMLDivElement>(data);

  return (
    <div ref={ref}>
      <ApolloStateHandler error={error} loading={loading}>
        <PageLayout mainContentWidth={mainContentWidth}>
          <Slider>
            <HomePage data={data} />
            <SchedulePage />
          </Slider>
        </PageLayout>
      </ApolloStateHandler>
    </div>
  );
};

export default Home;
