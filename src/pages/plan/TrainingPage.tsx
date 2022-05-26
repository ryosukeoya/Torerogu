import React, { useState, useEffect, VFC } from 'react';
import { InputField, SelectField, FormWrapper } from '~/components';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { CREATE_TRAINING } from '~/libs/graphql/mutations';
import { GetTrainingCategoryWithTypeDocument, GetTrainingCategoryWithTypeQuery, CreateTrainingMutation } from '~/libs/graphql/generated/graphql';
import { useQuery, useMutation } from '@apollo/client';
import { getStringTypeDate, getNumArr, getTrainingTypesFromCategoryID } from '~/utils';

type PlanTrainingFormValue = {
  date: string;
  category: string;
  type: string;
  trainingWeight: string;
  count: string;
  set: string;
};

type Props = {
  pageIndex: number;
};

const TrainingPage: VFC<Props> = ({ pageIndex }) => {
  const [open, setOpen] = useState(false);
  const [selectedCategoryID, setSelectedCategoryID] = useState<number>(1);

  const { data } = useQuery<GetTrainingCategoryWithTypeQuery>(GetTrainingCategoryWithTypeDocument);
  const [insertTraining] = useMutation<CreateTrainingMutation>(CREATE_TRAINING, {
    onCompleted: () => setOpen(true),
  });
  const method = useForm<PlanTrainingFormValue>();
  const { watch, handleSubmit } = method;
  const categoryField: string = watch('category');

  useEffect(() => {
    setSelectedCategoryID(parseInt(categoryField));
  }, [categoryField]);

  const registerTraining: SubmitHandler<Readonly<PlanTrainingFormValue>> = (data) => {
    insertTraining({
      variables: {
        training_type_id: data.type,
        training_weight: data.trainingWeight,
        training_count: data.count,
        training_set: data.set,
        is_finish: false,
        date: data.date,
      },
    });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <FormProvider {...method}>
      <FormWrapper pageIndex={pageIndex} handleSubmit={handleSubmit} submitFunc={registerTraining} title={'✏️ 日ごとの設定'} open={open} handleClose={handleClose}>
        <InputField required type='date' title='日付' min={getStringTypeDate(new Date(), 'YYYY-MM-DD')} formConf={{ name: 'date', options: { required: true } }} />
        <SelectField formConf={{ name: 'category', options: { required: true } }} title={'カテゴリ'} texts={data?.training_categories} marginBottom={32} isRequired />
        <SelectField formConf={{ name: 'type', options: { required: true } }} title={'種目'} texts={getTrainingTypesFromCategoryID(selectedCategoryID, data?.training_types)} marginBottom={32} isRequired />
        <SelectField formConf={{ name: 'trainingWeight', options: { required: true } }} title={'重量 (kg)'} texts={getNumArr(15, 200, 5)} marginBottom={32} isRequired />
        <SelectField formConf={{ name: 'count', options: { required: true } }} title={'回数'} texts={getNumArr(1, 100, 1)} marginBottom={32} isRequired />
        <SelectField formConf={{ name: 'set', options: { required: true } }} title={'セット数'} texts={getNumArr(1, 30, 1)} marginBottom={32} isRequired />
      </FormWrapper>
    </FormProvider>
  );
};

export default TrainingPage;
