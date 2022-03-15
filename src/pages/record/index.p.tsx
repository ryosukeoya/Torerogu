import type { NextPage } from 'next';
import { GET_TRAINING_CATEGORY_WITH_TYPE } from '../../libs/graphql/queries';
import type { GetTrainingCategoryWithTypeQuery } from '../../types/generated/graphql';
import { useRecoilValue } from 'recoil';
import { headerTabIndexAtom } from '../../store';
import { default as PhysicalPage } from './BodyInfoPage';
import { default as TrainingPage } from './TrainingPage';
import { initializeApollo } from '../../libs/graphql/apolloClient';

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
  const activeIndex = useRecoilValue<number>(headerTabIndexAtom);

  if (activeIndex === 0) {
    return <PhysicalPage />;
  } else if (activeIndex === 1) {
    return <TrainingPage data={data} />;
  } else {
    return null;
  }
};

export default Record;
