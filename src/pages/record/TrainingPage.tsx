import React, { useState, VFC } from 'react';
import { CreateTrainingDocument, GetTrainingCategoryWithTypeQuery, CreateTrainingMutation } from '~/libs/graphql/generated/graphql';
import { SubmitHandler } from 'react-hook-form';
import { useMutation } from '@apollo/client';
import TrainingSelection from './TrainingSelection';
import TrainingForm from './TrainingForm';
import type { TrainingType, TrainingFormValues } from './types';

type Props = {
  data?: GetTrainingCategoryWithTypeQuery;
  pageIndex: number;
};

const TrainingPage: VFC<Props> = ({ data, pageIndex }) => {
  const [open, setOpen] = useState(false);
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState<number>(0);
  const [selectedTrainingType, setSelectedTrainingType] = useState<TrainingType | null>(null);

  const [insertTraining, { error }] = useMutation<CreateTrainingMutation>(CreateTrainingDocument, {
    onCompleted: () => setOpen(true),
  });

  const handleClick = (data: Readonly<TrainingType>) => {
    setSelectedTrainingType(data);
  };

  const registerTraining: SubmitHandler<TrainingFormValues> = (data) => {
    insertTraining({
      variables: {
        user_id: 1,
        training_type_id: selectedTrainingType?.id,
        training_weight: data.trainingWeight,
        training_count: data.count,
        training_set: data.set,
        is_finish: true,
        date: new Date(),
      },
    });
  };

  if (error) return <p>記録に失敗しました、もう一度実行してください</p>;

  if (selectedTrainingType) {
    //TODO:回数ではない場合、ex.ランニング
    return <TrainingForm pageIndex={pageIndex} open={open} setOpen={setOpen} selectedTrainingType={selectedTrainingType} setSelectedTrainingType={setSelectedTrainingType} registerTraining={registerTraining} />;
  } else {
    return <TrainingSelection data={data} handleClick={handleClick} selectedCategoryIndex={selectedCategoryIndex} setSelectedCategoryIndex={setSelectedCategoryIndex} />;
  }
};

export default TrainingPage;
