import React, { useState } from 'react';
import type { VFC } from 'react';
import type { GetRecordPagePropsQuery } from '../../types/generated/graphql';
import { Slider, Space, Card, Input } from '../../components/_indexs';
import { cardStyle, sliderStyle, buttonStyle, inputStyle } from '../../components/_styles';
import { templates } from '../../styles/template';
import { useForm } from 'react-hook-form';

type TrainingTypes =
  | {
      id: number;
      name: string;
      training_category_id: number;
    }[]
  | undefined;

type TrainingType = {
  id: number;
  name: string;
  training_category_id: number;
};

type Props = {
  data?: GetRecordPagePropsQuery;
};

const SecondPage: VFC<Props> = ({ data }) => {
  const [categoryID, setCategoryID] = useState<number>(1);
  const [type, setType] = useState<TrainingType | null>(null);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleClick = (data: TrainingType) => {
    setType(data);
  };

  const getTrainingTypes = (): TrainingTypes => {
    const slectedTrainingTypes = data?.training_types.filter(function (training_type) {
      return training_type.training_category_id === categoryID;
    });
    return slectedTrainingTypes;
  };

  const registerTraining = () => {
    console.log('送信');
  };

  if (type) {
    //TODO:回数ではない場合、ex.ランニング
    //TODO:FIX必須
    return (
      <>
        <form onSubmit={handleSubmit(registerTraining)}>
          <div css={templates.contentArea}>
            <h2 css={templates.title}>✏️ {type.name}</h2>
            <div css={templates.content}>
              <p css={templates.contentTitle}>
                重量<span css={templates.require}>*必須</span>
              </p>
              <input {...register('trainingWeight', { required: true, pattern: /[0-9]/ })} type='text' css={inputStyle} />
              <span css={templates.unit}>kg</span>
              <p css={templates.errorMessage}>
                {errors.trainingWeight?.type === 'required' && '必須項目です'}
                {errors.trainingWeight?.type === 'pattern' && '数値を入力してください'}
              </p>
            </div>
            <div css={templates.content}>
              <p css={templates.contentTitle}>
                セット数<span css={templates.require}>*必須</span>
              </p>
              <input {...register('setCount', { required: true, pattern: /[0-9]/ })} type='text' css={inputStyle} />
              <span css={templates.unit}>set</span>
              <p css={templates.errorMessage}>
                {errors.setCount?.type === 'required' && '必須項目です'}
                {errors.setCount?.type === 'pattern' && '数値を入力してください'}
              </p>
            </div>
            <div css={templates.content}>
              <p css={templates.contentTitle}>
                回数<span css={templates.require}>*必須</span>
              </p>
              <input {...register('count', { required: true, pattern: /[0-9]/ })} type='text' css={inputStyle} />
              <span css={templates.unit}>回</span>
              <p css={templates.errorMessage}>
                {errors.count?.type === 'required' && '必須項目です'}
                {errors.count?.type === 'pattern' && '数値を入力してください'}
              </p>
            </div>
            <Input type={'isInput'} typeAttr='submit' _css={buttonStyle(10)} value={'記録する'} />
            <p css={templates.back} onClick={() => setType(null)}>
              ＜ カテゴリ選択に戻る
            </p>
          </div>
        </form>
      </>
    );
  } else {
    return (
      <>
        <Space height={20} />
        <Slider items={data?.training_categories} setState={setCategoryID} sliderStyle={sliderStyle} />
        {getTrainingTypes()?.map((training_type) => {
          return (
            <Card data={training_type} id={training_type.id} handleClick={handleClick} key={training_type.id} _css={cardStyle(15)}>
              {training_type.name}
            </Card>
          );
        })}
      </>
    );
  }
};

export default SecondPage;
