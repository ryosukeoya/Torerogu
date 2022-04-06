import React, { useState, useEffect } from 'react';
import type { VFC } from 'react';
import { InputField, SelectField, FormWrapper } from '~/components';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { GET_TRAINING_CATEGORY_WITH_TYPE } from '~/libs/graphql/queries';
import { CREATE_TRAINING } from '~/libs/graphql/mutations';
import type { GetTrainingCategoryWithTypeQuery, CreateTrainingMutation } from '~/types/generated/graphql';
import { useQuery, useMutation } from '@apollo/client';
import { getCurrentDate, getNumArr, getTrainingTypesFromCategoryID } from '~/utils';

type PlanTrainingFormValue = {
  date: Date;
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

  const { data } = useQuery<GetTrainingCategoryWithTypeQuery>(GET_TRAINING_CATEGORY_WITH_TYPE);
  const [insertTraining] = useMutation<CreateTrainingMutation>(CREATE_TRAINING, {
    onCompleted: () => setOpen(true),
  });
  const method = useForm<PlanTrainingFormValue>();
  const { watch, handleSubmit } = method;
  const categoryField: string = watch('category');

  useEffect(() => {
    const categoryFieldArr: string[] = categoryField?.split(',');
    if (categoryFieldArr?.length >= 2) {
      setSelectedCategoryID(parseInt(categoryFieldArr[0]));
    }
  }, [categoryField]);

  const registerTraining: SubmitHandler<Readonly<PlanTrainingFormValue>> = (data) => {
    //TODO:FIX user_id
    insertTraining({ variables: { user_id: 1, training_type_id: data.type[0], training_weight: data.trainingWeight, training_count: data.count, training_set: data.set, is_finish: false, date: data.date } });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <FormProvider {...method}>
      <FormWrapper pageIndex={pageIndex} handleSubmit={handleSubmit} submitFunc={registerTraining} title={'✏️ 日ごとの設定'} open={open} handleClose={handleClose}>
        <InputField
          type='date'
          title='日付'
          value={getCurrentDate(new Date(), true)}
          min={getCurrentDate(new Date(), true)}
          formConf={{ name: 'date', option: { required: true } }}
        />
        <SelectField formConf={{ name: 'category', option: { required: true } }} title={'カテゴリ'} texts={data?.training_categories} marginBottom={20} isRequired />
        <SelectField formConf={{ name: 'type', option: { required: true } }} title={'種目'} texts={getTrainingTypesFromCategoryID(selectedCategoryID, data?.training_types)} marginBottom={20} isRequired />
        <SelectField formConf={{ name: 'trainingWeight', option: { required: true } }} title={'重量 (kg)'} texts={getNumArr(15, 200, 5)} marginBottom={20} isRequired />
        <SelectField formConf={{ name: 'count', option: { required: true } }} title={'回数'} texts={getNumArr(1, 100, 1)} marginBottom={20} isRequired />
        <SelectField formConf={{ name: 'set', option: { required: true } }} title={'セット数'} texts={getNumArr(1, 30, 1)} marginBottom={20} isRequired />
      </FormWrapper>
    </FormProvider>
  );
};

export default TrainingPage;
