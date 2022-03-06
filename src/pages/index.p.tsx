import type { NextPage } from 'next';
import type { GetHomePagePropsQuery } from '../types/generated/graphql';
import { GET_HOME_PAGE_PROPS } from '../libs/graphql/queries/home';
import { useQuery } from '@apollo/client';
import { templates } from '../styles/template';
import { useRecoilValue } from 'recoil';
import { headerTabIndexAtom } from '../store';

const Home: NextPage = () => {
  const activeIndex = useRecoilValue<number>(headerTabIndexAtom);
  const { data, error, loading } = useQuery<GetHomePagePropsQuery>(GET_HOME_PAGE_PROPS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (activeIndex === 0) {
    return (
      <>
        <div css={templates.contentArea}>
          <h2 css={templates.title}>✏️ 本日のトレーニング</h2>
          <div>
            {data?.trainings.map((training) => {
              return (
                <div key={training.id} style={{ backgroundColor: '#dadada', marginBottom: '20px' }}>
                  <span>{training.is_finish && '✅'}</span>
                  <p style={{display:'inline-block'}}>{training.training_type.name}</p>
                  <p>{training.training_set}セット</p>
                  <p>{training.training_count}回</p>
                  <p>{training.training_weight}kg</p>
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  } else {
    return <p>history page</p>;
  }
};

export default Home;
