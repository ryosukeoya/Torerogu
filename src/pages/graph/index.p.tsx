import React, { VFC } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Space, Navigation } from '../../components/entryPoints';
import { useRecoilValue } from 'recoil';
import { headerTabIndexAtom } from '../../store';
import { COLOR } from '../../styles/const';
import { useQuery } from '@apollo/client';
import { GET_GRAPH_PAGE_PROPS } from '../../libs/graphql/queries/graph';
import type { GetGraphPagePropsQuery } from '../../types/generated/graphql';

type BodyInfoDataHistory = {
  __typename?: 'body_info_data_histories' | undefined;
  id: number;
  user_id: number;
  weight: number;
  date: Date;
};

type ChartData = {
  date: number;
  weight: number;
};

const Graph: VFC = () => {
  const { data, error } = useQuery<GetGraphPagePropsQuery>(GET_GRAPH_PAGE_PROPS);
  const activeIndex = useRecoilValue<number>(headerTabIndexAtom);

  if (error) return <p>Error: {error.message}</p>;

  const convert = (data: BodyInfoDataHistory[] | undefined) => {
    const result = data?.map((d: BodyInfoDataHistory) => {
      return {
        date: new Date(d.date).getTime(),
        weight: d.weight,
      };
    });

    result?.sort(function (a: ChartData, b: ChartData) {
      if (a.date === b.date) {
        return 0;
      } else if (a.date < b.date) {
        return 1;
      } else {
        return -1;
      }
    });

    return result;
  };

  if (activeIndex === 0) {
    return (
      <>
        <Space height={50} />
        <ResponsiveContainer width='100%' height={400}>
          <LineChart data={convert(data?.body_info_data_histories)} margin={{ top: 5, right: 30, bottom: 5, left: 0 }}>
            {/* <LineChart data={dummyData} margin={{ top: 5, right: 30, bottom: 5, left: 0 }}> */}
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
    return <p>hoge</p>;
  } else if (activeIndex === 2) {
    return <p>foo</p>;
  } else {
    return null;
  }
};

export default Graph;
