import type { NextPage } from 'next';
import React, { useState } from 'react';
import { css } from '@emotion/react';
import { useQuery } from '@apollo/client';
import {} from '../../libs/graphql/queries/training_categories';
import { GET_RECORD_PAGE_PROPS } from '../../libs/graphql/queries/record';
import { GetRecordPagePropsQuery } from '../../types/generated/graphql';
import { Card } from '../../components/_indexs';
import { useRecoilValue } from 'recoil';
import { headerTabIndexAtom } from '../../store';
import { Input, Button, Slider, Space } from '../../components/_indexs';
import { inputStyle, buttonStyle, cardStyle, sliderStyle } from '../../components/_styles';
import { getDate } from '../../utils';
import { FONT } from '../../styles/const';

type TrainingTypes =
  | {
      __typename?: 'training_types' | undefined;
      id: number;
      name: string;
      training_category_id: number;
    }[]
  | undefined;

const Record: NextPage = () => {
  const activeIndex = useRecoilValue(headerTabIndexAtom);
  const [categoryID, setCategoryID] = useState(1);
  const { data, error, loading } = useQuery<GetRecordPagePropsQuery>(GET_RECORD_PAGE_PROPS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const date = getDate();

  const getTrainingTypes = (): TrainingTypes => {
    const slectedTrainingTypes = data?.training_types.filter(function (training_type) {
      return training_type.training_category_id === categoryID;
    });
    return slectedTrainingTypes;
  };

  if (activeIndex === 0) {
    return (
      <div css={styles.contentArea}>
        <h2 css={styles.title}>
          ✏️ {date.month} / {date.day} の記録
        </h2>
        <div css={styles.content}>
          <p>体重</p>
          <Input type={'isInput'} typeAttr='text' placeholder='60' _css={inputStyle} />
          <span>kg</span>
        </div>
        <div css={styles.content}>
          <p>体脂肪率</p>
          <Input type={'isInput'} typeAttr='text' placeholder='10' _css={inputStyle} />
          <span>%</span>
        </div>

        <Button type={'isButton'} text={'記録する'} _css={buttonStyle(10)} />
      </div>
    );
  } else {
    return (
      <>
        <Space height={20}/>
        <Slider items={data?.training_categories} setState={setCategoryID} sliderStyle={sliderStyle} />
        {getTrainingTypes()?.map((training_type) => {
          return (
            <Card key={training_type.id} _css={cardStyle(15)}>
              {training_type.name}
            </Card>
          );
        })}
      </>
    );
  }
};

export default Record;

const styles = {
  contentArea: css`
    width: 90vw;
    margin: 0 auto;
    padding-top: 30px;
  `,
  title: css`
    padding-bottom: 20px;
    font-size: ${FONT.X1_LARGE};
  `,
  content: css`
    padding-bottom: 15px;
    & p {
      font-size: ${FONT.LARGE};
      padding-bottom: 10px;
    }
  `,
};
