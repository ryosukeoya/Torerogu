import React, { useState, VFC } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { PrimaryNavigationPresenter } from '~/components';
import { COLOR } from '~/styles/const';
import { getSortedDataFromDate, getDataExtractionInSpecifiedPeriod, getGraphPeriodFromActiveIndex } from './logic';
import type { GetTrainingWithBodyInfoQuery } from '~/types/generated/graphql';
import { pageTemplate } from '~/styles/shares';
import { css } from '@emotion/react';

const titles = ['1週間', '1ヶ月', '1年', '全て'];

type Props = {
  bodyInfo: GetTrainingWithBodyInfoQuery['body_info_data_histories'] | undefined;
};

type BodyInfo = GetTrainingWithBodyInfoQuery['body_info_data_histories'];

const WeightPage: VFC<Props> = ({ bodyInfo }) => {
  const [activeIndex, setActiveIndex] = useState<number>(titles.length - 1);

  // TODO
  // 表示するデータがない時データがないことをわかるようにしないと
  // doneのflagを考慮していない

  return (
    <div
      css={[
        pageTemplate.contentArea,
        css`
          padding: 50px 0 0 0 !important;
        `,
      ]}
    >
      <ResponsiveContainer width='100%' height={400}>
        <LineChart
          data={bodyInfo && getSortedDataFromDate(getDataExtractionInSpecifiedPeriod<Required<BodyInfo>>(bodyInfo, getGraphPeriodFromActiveIndex(activeIndex)))}
          margin={{ top: 5, right: 30, bottom: 5, left: 0 }}
          //
        >
          {/* <LineChart data={getSortedDataFromDate(getDataExtractionInSpecifiedPeriod(bodyInfo, 0))} margin={{ top: 5, right: 30, bottom: 5, left: 0 }}> */}
          <Line type='monotone' dataKey='weight' stroke={COLOR.ORANGE} strokeWidth={2.5} dot={{ stroke: COLOR.ORANGE, strokeWidth: 2 }} />
          <CartesianGrid strokeDasharray='3 5' />
          {/* domain:横軸の表示幅を指定、tickFormatter:横軸の表示形式を指定、label:横軸のラベルを指定 */}
          <XAxis dataKey='date' domain={['dataMin', 'dataMax']} tickFormatter={(unixTime) => new Date(unixTime).toLocaleDateString()} type='number' />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
      {/* <PrimaryNavigationLocalState titles={titles} theme='roundish' options={{ isToggle: true, isSwiper: false }} initialActiveIndex={titles.length - 1} /> */}
      <PrimaryNavigationPresenter titles={titles} theme='roundish' options={{ isToggle: true, isSwiper: false }} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </div>
  );
};

export default WeightPage;
