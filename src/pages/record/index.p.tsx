import type { NextPage } from 'next';
import { useQuery } from '@apollo/client';
import { GET_RECORD_PAGE_PROPS } from '../../libs/graphql/queries/record';
import { GetRecordPagePropsQuery } from '../../types/generated/graphql';
import { useRecoilValue } from 'recoil';
import { headerTabIndexAtom } from '../../store';
import { default as PhysicalPage } from './FirstPage';
import { default as TrainingPage } from './SecondPage';

const Record: NextPage = () => {
  const activeIndex = useRecoilValue<number>(headerTabIndexAtom);
  const { data, error, loading } = useQuery<GetRecordPagePropsQuery>(GET_RECORD_PAGE_PROPS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (activeIndex === 0) {
    return <PhysicalPage />;
  } else if (activeIndex === 1) {
    return <TrainingPage data={data} />;
  } else {
    return null;
  }
};

export default Record;
