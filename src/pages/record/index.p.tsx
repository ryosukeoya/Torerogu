import type { NextPage } from 'next';
import { GET_TRAINING_CATEGORY_WITH_TYPE } from '~/libs/graphql/queries';
import type { GetTrainingCategoryWithTypeQuery } from '~/types/generated/graphql';
import BodyInfoPage from './BodyInfoPage';
import TrainingPage from './TrainingPage';
import { initializeApollo } from '~/libs/graphql/apolloClient';
import { SwiperContainer } from '~/components';

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
  return (
    <SwiperContainer>
      <BodyInfoPage pageIndex={0} />
      <TrainingPage data={data} pageIndex={1} />
    </SwiperContainer>
  );
};

export default Record;
