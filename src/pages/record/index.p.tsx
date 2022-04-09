import type { NextPage } from 'next';
import { GET_TRAINING_CATEGORY_WITH_TYPE } from '~/libs/graphql/queries';
import type { GetTrainingCategoryWithTypeQuery } from '~/types/generated/graphql';
import BodyInfoPage from './BodyInfoPage';
import TrainingPage from './TrainingPage';
import { initializeApollo } from '~/libs/graphql/apolloClient';
import { SwiperWrapper } from '~/components';
import { useGetElementWidth } from '~/hooks';
import { PageLayout } from '~/layout';

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const data = await apolloClient.query({
    query: GET_TRAINING_CATEGORY_WITH_TYPE,
  });

  return {
    props: data,
  };
}

type Props = {
  data?: GetTrainingCategoryWithTypeQuery;
};

const Record: NextPage<Props> = ({ data }) => {
  const [elm, mainContentWidth] = useGetElementWidth<HTMLDivElement>();

  return (
    <PageLayout mainContentWidth={mainContentWidth}>
      <SwiperWrapper elm={elm}>
        <BodyInfoPage pageIndex={0} />
        <TrainingPage data={data} pageIndex={1} />
      </SwiperWrapper>
    </PageLayout>
  );
};

export default Record;
