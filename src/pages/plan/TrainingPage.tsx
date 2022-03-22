import React, { useState, useEffect } from 'react';
import type { VFC } from 'react';
import { InputFormPart, Select, FormContainer } from '~/components/entryPoint';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { GET_TRAINING_CATEGORY_WITH_TYPE } from '~/libs/graphql/queries';
import { CREATE_TRAINING } from '~/libs/graphql/mutations';
import type { GetTrainingCategoryWithTypeQuery, CreateTrainingMutation } from '~/types/generated/graphql';
import { useQuery, useMutation } from '@apollo/client';
import { getCurrentDate, getNumArr, getTrainingTypes } from '~/utils';
import { css } from '@emotion/react';

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
      <FormContainer pageIndex={pageIndex} handleSubmit={handleSubmit} submitFunc={registerTraining} title={'✏️ 日ごとの設定'} open={open} handleClose={handleClose}>
        <InputFormPart
          customCss={css`
            padding: 0 0 10px 0;
          `}
          options={{ value: getCurrentDate(new Date(), true), min: getCurrentDate(new Date(), true) }}
          title={'日付'}
          typeAttr={'date'}
          type={'isInput'}
          form={{ name: 'date', option: { required: true } }}
        />
        <Select form={{ name: 'category', option: { required: true } }} title={'カテゴリ'} texts={data?.training_categories} marginBottom={20} isRequired />
        <Select form={{ name: 'type', option: { required: true } }} title={'種目'} texts={getTrainingTypes(selectedCategoryID, data?.training_types, data?.training_categories)} marginBottom={20} isRequired />
        <Select form={{ name: 'trainingWeight', option: { required: true } }} title={'重量 (kg)'} texts={getNumArr(15, 200, 5)} marginBottom={20} isRequired />
        <Select form={{ name: 'count', option: { required: true } }} title={'回数'} texts={getNumArr(1, 100, 1)} marginBottom={20} isRequired />
        <Select form={{ name: 'set', option: { required: true } }} title={'セット数'} texts={getNumArr(1, 30, 1)} marginBottom={20} isRequired />
      </FormContainer>
    </FormProvider>
  );
};

export default TrainingPage;
