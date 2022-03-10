import type { NextPage } from 'next';
import { GET_RECORD_PAGE_PROPS } from '../../libs/graphql/queries/record';
import type { GetRecordPagePropsQuery } from '../../types/generated/graphql';
import { useRecoilValue } from 'recoil';
import { headerTabIndexAtom } from '../../store';
import { default as PhysicalPage } from './BodyInfoPage';
import { default as TrainingPage } from './TrainingPage';
import { initializeApollo } from '../../libs/graphql/apolloClient';

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const data = await apolloClient.query({
    query: GET_RECORD_PAGE_PROPS,
  });

  return {
    props: data,
  };

}

type Props = {
  data?: GetRecordPagePropsQuery;
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
