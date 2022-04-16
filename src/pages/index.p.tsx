import type { NextPage } from 'next';
import { GET_TRAINING_ONE_TYPE } from '../libs/graphql/queries';
import type { GetTrainingOneTypeQuery } from '../types/generated/graphql';
import { useQuery } from '@apollo/client';
import { pageTemplate } from '../styles/shares/pageTemplate';
import { getStringTypeDate } from '../utils/app';
import Top from './Top';
import History from './History';
import { SwiperWrapper } from '~/components';
import { useGetElementWidth } from '~/hooks';
import { PageLayout } from '~/layout';

const Home: NextPage = () => {
  const { data, error, loading } = useQuery<GetTrainingOneTypeQuery>(GET_TRAINING_ONE_TYPE, {
    variables: { date: getStringTypeDate(new Date()) },
    fetchPolicy: 'network-only',
  });
  const [elm, mainContentWidth] = useGetElementWidth<HTMLDivElement>(data);

  if (loading) {
    return (
      <div css={pageTemplate.contentArea}>
        <p>Loading...</p>
      </div>
    );
  }
  if (error) throw new Error(error.message);

  return (
    <PageLayout mainContentWidth={mainContentWidth}>
      <SwiperWrapper elm={elm}>
        <Top data={data} />
        <History />
      </SwiperWrapper>
    </PageLayout>
  );
};

export default Home;
