import type { NextPage } from 'next';
import { GetTrainingOneTypeDocument, GetTrainingOneTypeQuery } from '~/libs/graphql/generated/graphql';
import { useQuery } from '@apollo/client';
import { pageTemplate } from '~/styles/shares/pageTemplate';
import { getStringTypeDate } from '~/utils/app';
import HomePage from './HomePage';
import SchedulePage from './SchedulePage';
import { Slider } from '~/components';
import { useGetElementWidth } from '~/hooks';
import { PageLayout } from '~/layout';
// import '~/tests/mocks/starter';
import { Auth0AuthorizationHandler } from '~/components/Auth0AuthorizationHandler';

const Home: NextPage = () => {
  const { data, error, loading } = useQuery<GetTrainingOneTypeQuery>(GetTrainingOneTypeDocument, {
    variables: { date: getStringTypeDate(new Date()) },
    fetchPolicy: 'network-only',
  });
  const [ref, mainContentWidth] = useGetElementWidth<HTMLDivElement>(data);

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
            <HomePage data={data} />
            <SchedulePage />
          </Slider>
        </PageLayout>
      </Auth0AuthorizationHandler>
    </div>
  );
};

export default Home;
