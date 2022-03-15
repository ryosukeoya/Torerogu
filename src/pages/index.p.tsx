import type { NextPage } from 'next';
import { GET_TRAINING_ONE_TYPE } from '../libs/graphql/queries';
import type { GetTrainingOneTypeQuery } from '../types/generated/graphql';
import { useQuery } from '@apollo/client';
import { templates } from '../styles/template';
import { useRecoilValue } from 'recoil';
import { headerTabIndexAtom } from '../store';
import { getCurrentDate } from '../utils/app';
import Top from './Top';
import History from './History';

const Home: NextPage = () => {
  const activeIndex = useRecoilValue<number>(headerTabIndexAtom);
  const { data, error, loading } = useQuery<GetTrainingOneTypeQuery>(GET_TRAINING_ONE_TYPE, {
    variables: { date: getCurrentDate(new Date(), false) },
    fetchPolicy: 'network-only',
  });

  if (loading) {
    return (
      <div css={templates.contentArea}>
        <p>Loading...</p>
      </div>
    );
  }
  if (error) return <p>Error: {error.message}</p>;

  if (activeIndex === 0) {
    return <Top data={data} />;
  } else if (activeIndex === 1) {
    return <History />;
  } else {
    return null;
  }
};

export default Home;
