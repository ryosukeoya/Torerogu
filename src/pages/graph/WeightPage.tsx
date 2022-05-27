import React, { useState, VFC } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { PrimaryNavigationPresenter } from '~/components';
import { COLOR } from '~/styles/const';
import { getSortedDataFromDate, getDataExtractionInSpecifiedPeriod, getGraphPeriodFromActiveIndex } from '~/utils/graph';
import type { GetTrainingWithBodyInfoQuery } from '~/libs/graphql/generated/graphql';
import { pageTemplate, media } from '~/styles/shares';
import { css } from '@emotion/react';

const titles = ['1週間', '1ヶ月', '1年', '全て'];

type Props = {
  bodyInfo: GetTrainingWithBodyInfoQuery['body_info_data_histories'] | undefined;
};

type BodyInfo = GetTrainingWithBodyInfoQuery['body_info_data_histories'];

const WeightPage: VFC<Props> = ({ bodyInfo }) => {
  const [activeIndex, setActiveIndex] = useState<number>(titles.length - 1);

  // TODO
  // 表示するデータがない時データがないことをわかるように
  // 1日で複数のデータがある場合はまとめる
  return (
    <div
      css={[
        pageTemplate.contentArea,
        css`
          width: 100%;
          padding: 35px 0 0 0 !important;
          ${media.pc(
            css`
              width: 90%;
            `,
          )}
        `,
      ]}
    >
      <ResponsiveContainer width='100%' height={400}>
        <LineChart
          data={bodyInfo && getSortedDataFromDate(getDataExtractionInSpecifiedPeriod<BodyInfo>(bodyInfo, getGraphPeriodFromActiveIndex(activeIndex)))}
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
      <PrimaryNavigationPresenter titles={titles} theme='roundish' options={{ isToggle: true, isSwiper: false }} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </div>
  );
};

export default WeightPage;
