import type { NextPage } from 'next';
import { GetTrainingOneTypeDocument, GetTrainingOneTypeQuery } from '~/libs/graphql/generated/graphql';
import { useQuery } from '@apollo/client';
import { pageTemplate } from '~/styles/shares/pageTemplate';
import { getStringTypeDate } from '~/utils/app';
import HomePage from './HomePage';
import SchedulePage from './SchedulePage';
import { SwiperWrapper } from '~/components';
import { useGetElementWidth } from '~/hooks';
import { PageLayout } from '~/layout';
// import '~/tests/mocks/starter';
import { Auth0AuthorizationHandler } from '~/components/Auth0AuthorizationHandler';

const Home: NextPage = () => {
  const { data, error, loading } = useQuery<GetTrainingOneTypeQuery>(GetTrainingOneTypeDocument, {
    variables: { date: getStringTypeDate(new Date()) },
    fetchPolicy: 'network-only',
  });
  const [elm, mainContentWidth] = useGetElementWidth<HTMLDivElement>(data);

  if (loading) {
    return (
      <div css={pageTemplate.contentArea} data-testid='loading'>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) throw new Error(error.message);

  return (
    <Auth0AuthorizationHandler>
      <PageLayout mainContentWidth={mainContentWidth}>
        <SwiperWrapper elm={elm}>
          <HomePage data={data} />
          <SchedulePage />
        </SwiperWrapper>
      </PageLayout>
    </Auth0AuthorizationHandler>
  );
};

export default Home;
