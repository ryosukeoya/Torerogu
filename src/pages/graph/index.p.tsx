import React, { VFC } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Space, Navigation } from '../../components/_indexs';
import { useRecoilValue } from 'recoil';
import { headerTabIndexAtom } from '../../store';
import { COLOR } from '../../styles/const';

const dummyData = [
  { date: new Date('2022-03-01').getTime(), weight: 60 },
  { date: new Date('2022-03-05').getTime(), weight: 66 },
  { date: new Date('2022-03-07').getTime(), weight: 67 },
  { date: new Date('2022-03-08').getTime(), weight: 65 },
  { date: new Date('2022-03-15').getTime(), weight: 57 },
  { date: new Date('2022-03-20').getTime(), weight: 59 },
  { date: new Date('2022-03-22').getTime(), weight: 53 },
];

const Graph: VFC = () => {
  const activeIndex = useRecoilValue<number>(headerTabIndexAtom);

  if (activeIndex === 0) {
    return (
      <>
        <Space height={50} />
        <ResponsiveContainer width='100%' height={400}>
          <LineChart data={dummyData} margin={{ top: 5, right: 30, bottom: 5, left: 0 }}>
            <Line type='monotone' dataKey='weight' stroke={COLOR.ORANGE} strokeWidth={2.5} dot={{ stroke: COLOR.ORANGE, strokeWidth: 2 }} />
            <CartesianGrid strokeDasharray='3 5' />
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
