import React from 'react';
import type { VFC } from 'react';
import { css } from '@emotion/react';
import { Input } from '../../components/_indexs';
import { inputStyle, buttonStyle } from '../../components/_styles';
import { getDateInfo } from '../../utils';
import { COLOR, FONT } from '../../styles/const';
import { useMutation } from '@apollo/client';
import { CREATE_BODY_INFO_HISTORIES } from '../../libs/graphql/mutations/record';
import type { CreateBodyInfoHistoriesMutation } from '../../types/generated/graphql';
import { useForm } from 'react-hook-form';

type BodyInfoHistories = {
  weight: number | '';
  bodyFatPercentage: number | '' | null;
};

const FirstPage: VFC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<NonNullable<BodyInfoHistories>>();

  const date = getDateInfo();

  const [insertBodyInfo] = useMutation<CreateBodyInfoHistoriesMutation>(CREATE_BODY_INFO_HISTORIES);

  const registerBodyInfo = (data: BodyInfoHistories) => {
    // TODO:FIX
    const user_id = 1;
    if (data.bodyFatPercentage === '') {
      data.bodyFatPercentage = null;
    }
    insertBodyInfo({ variables: { height: null, weight: data.weight, body_fat_percentage: data.bodyFatPercentage, date: new Date(), user_id: user_id } });
  };

  return (
    <form onSubmit={handleSubmit(registerBodyInfo)}>
      <div css={styles.contentArea}>
        <h2 css={styles.title}>
          ✏️ {date.month} / {date.day} ({date.weekday}) の記録
        </h2>
        <div css={styles.content}>
          <p css={styles.contentTitle}>
            体重
            <span css={styles.require}>*必須</span>
          </p>
          <input {...register('weight', { required: true, maxLength: 3, pattern: /[0-9]/ })} placeholder={'60'} css={inputStyle} />
          <span css={styles.unit}>kg</span>
          <p css={styles.errorMessage}>
            {errors.weight?.type === 'required' && '必須項目です'}
            {errors.weight?.type === 'pattern' && '数値を入力してください'}
            {errors.weight?.type === 'maxLength' && '3桁以下にしてください'}
          </p>
        </div>
        <div css={styles.content}>
          <p css={styles.contentTitle}>体脂肪率</p>
          <input {...register('bodyFatPercentage', { maxLength: 2, pattern: /[0-9]/ })} placeholder={'10'} css={inputStyle} />
          <span css={styles.unit}>%</span>
          <p css={styles.errorMessage}>
            {errors.bodyFatPercentage?.type === 'pattern' && '数値を入力してください'}
            {errors.bodyFatPercentage?.type === 'maxLength' && '2桁以下にしてください'}
          </p>
        </div>
        <Input type={'isInput'} typeAttr='submit' _css={buttonStyle(10)} value={'記録する'} />
      </div>
    </form>
  );
};

export default FirstPage;

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
  `,
  contentTitle: css`
    font-size: ${FONT.LARGE};
    padding-bottom: 10px;
  `,
  require: css`
    color: red;
    padding-left: 10px;
    font-size: ${FONT.BASE};
  `,
  unit: css`
    padding-left: 4px;
  `,
  errorMessage: css`
    padding-top: 8px;
    font-size: ${FONT.SMALL};
    color: ${COLOR.RED};
  `,
};
