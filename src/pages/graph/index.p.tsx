import React, { VFC } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Space, Navigation } from '~/components';
import { useRecoilValue } from 'recoil';
import { headerTabIndexAtom } from '~/store';
import { COLOR } from '~/styles/const';
import { useQuery } from '@apollo/client';
import { GET_TRAINING_WITH_BODY_INFO } from '~/libs/graphql/queries';
import type { GetTrainingWithBodyInfoQuery } from '~/types/generated/graphql';
import { getSortDate } from './logic';

const Graph: VFC = () => {
  const { data, error } = useQuery<GetTrainingWithBodyInfoQuery>(GET_TRAINING_WITH_BODY_INFO);
  const activeIndex = useRecoilValue<number>(headerTabIndexAtom);

  if (error) return <p>Error: {error.message}</p>;

  if (activeIndex === 0) {
    return (
      <>
        <Space height={50} />
        <ResponsiveContainer width='100%' height={400}>
          <LineChart data={getSortDate(data?.body_info_data_histories)} margin={{ top: 5, right: 30, bottom: 5, left: 0 }}>
            <Line type='monotone' dataKey='weight' stroke={COLOR.ORANGE} strokeWidth={2.5} dot={{ stroke: COLOR.ORANGE, strokeWidth: 2 }} />
            <CartesianGrid strokeDasharray='3 5' />
            {/* domain:横軸の表示幅を指定、tickFormatter:横軸の表示形式を指定、label:横軸のラベルを指定 */}
            <XAxis dataKey='date' domain={['dataMin', 'dataMax']} tickFormatter={(unixTime) => new Date(unixTime).toLocaleDateString()} type='number' />
            <YAxis />
          </LineChart>
        </ResponsiveContainer>
        <Navigation titles={['1週間', '1ヶ月', '1年', '全て']} />
      </>
    );
  } else if (activeIndex === 1) {
    return <p>作成中</p>;
  } else if (activeIndex === 2) {
    return <p>作成中</p>;
  } else {
    return null;
  }
};

export default Graph;
