import type { NextPage } from 'next';
import { GET_TRAINING_CATEGORY_WITH_TYPE } from '../../libs/graphql/queries';
import type { GetTrainingCategoryWithTypeQuery } from '../../types/generated/graphql';
import { default as PhysicalPage } from './BodyInfoPage';
import { default as TrainingPage } from './TrainingPage';
import { initializeApollo } from '../../libs/graphql/apolloClient';
import { SwiperContainer } from '../../components/entryPoint';

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
      <PhysicalPage />
      <TrainingPage data={data} />
    </SwiperContainer>
  );
};

export default Record;
