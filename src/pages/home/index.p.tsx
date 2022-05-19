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
import { useAuth0 } from '@auth0/auth0-react';
import AuthenticationPage from '../AuthenticationPage';

const Home: NextPage = () => {
  const { data, error, loading } = useQuery<GetTrainingOneTypeQuery>(GetTrainingOneTypeDocument, {
    variables: { date: getStringTypeDate(new Date()) },
    fetchPolicy: 'network-only',
  });
  const [elm, mainContentWidth] = useGetElementWidth<HTMLDivElement>(data);
  const { isAuthenticated } = useAuth0();

  if (loading) {
    return (
      <div css={pageTemplate.contentArea} data-testid='loading'>
        <p>Loading...</p>
      </div>
    );
  }
  if (!isAuthenticated) return <AuthenticationPage />;

  if (error) throw new Error(error.message);

  return (
    <PageLayout mainContentWidth={mainContentWidth}>
      <SwiperWrapper elm={elm}>
        <HomePage data={data} />
        <SchedulePage />
      </SwiperWrapper>
    </PageLayout>
  );
};

export default Home;
