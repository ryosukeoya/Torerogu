import React, { VFC } from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import { Spacer, PrimaryNavigationLocalState } from '~/components';
import { COLOR } from '~/styles/const';
import { getSortDate } from './logic';
import type { GetTrainingWithBodyInfoQuery } from '~/types/generated/graphql';
import { pageTemplate } from '~/styles/shares';
import { css } from '@emotion/react';

type Props = {
  data: GetTrainingWithBodyInfoQuery | undefined;
};

const WeightPage: VFC<Props> = ({ data }) => {
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
        <LineChart data={getSortDate(data?.body_info_data_histories)} margin={{ top: 5, right: 30, bottom: 5, left: 0 }}>
          <Line type='monotone' dataKey='weight' stroke={COLOR.ORANGE} strokeWidth={2.5} dot={{ stroke: COLOR.ORANGE, strokeWidth: 2 }} />
          <CartesianGrid strokeDasharray='3 5' />
          {/* domain:横軸の表示幅を指定、tickFormatter:横軸の表示形式を指定、label:横軸のラベルを指定 */}
          <XAxis dataKey='date' domain={['dataMin', 'dataMax']} tickFormatter={(unixTime) => new Date(unixTime).toLocaleDateString()} type='number' />
          <YAxis />
        </LineChart>
      </ResponsiveContainer>
      <PrimaryNavigationLocalState titles={['1週間', '1ヶ月', '1年', '全て']} theme='roundish' options={{ isToggle: true, isSwiper: false }} />
    </div>
  );
};

export default WeightPage;
