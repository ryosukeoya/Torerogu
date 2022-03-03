import React, { useState } from 'react';
import type { VFC } from 'react';
import type { GetRecordPagePropsQuery } from '../../types/generated/graphql';
import { Slider, Space, Card, Button } from '../../components/_indexs';
import { cardStyle, sliderStyle, buttonStyle } from '../../components/_styles';

type TrainingTypes =
  | {
      __typename?: 'training_types' | undefined;
      id: number;
      name: string;
      training_category_id: number;
    }[]
  | undefined;

type Props = {
  data?: GetRecordPagePropsQuery;
};

const SecondPage: VFC<Props> = ({ data }) => {
  const [categoryID, setCategoryID] = useState<number>(1);
  const [typeID, setTypeID] = useState<number | undefined>();
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = (id: number) => {
    setIsSelected((prev) => !prev);
    setTypeID(id);
  };

  const getTrainingTypes = (): TrainingTypes => {
    const slectedTrainingTypes = data?.training_types.filter(function (training_type) {
      return training_type.training_category_id === categoryID;
    });
    return slectedTrainingTypes;
  };

  if (isSelected) {
    return (
      <>
        <p>{typeID}</p>
        <Button type={'isButton'} text={'記録する'} _css={buttonStyle()} />
        <p onClick={() => setIsSelected(false)}>カテゴリ選択に戻る</p>
      </>
    );
  } else {
    return (
      <>
        <Space height={20} />
        <Slider items={data?.training_categories} setState={setCategoryID} sliderStyle={sliderStyle} />
        {getTrainingTypes()?.map((training_type) => {
          return (
            <Card id={training_type.id} handleClick={handleClick} key={training_type.id} _css={cardStyle(15)}>
              {training_type.name}
            </Card>
          );
        })}
      </>
    );
  }
};

export default SecondPage;
