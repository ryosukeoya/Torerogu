import React, { useState } from 'react';
import type { VFC } from 'react';
import { InputForm, Select, Input, Snackbar } from '../../components/entryPoints';
import { simpleButton, selectStyle } from '../../components/styleEntryPoints';
import { templates } from '../../styles/template';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { css } from '@emotion/react';
import { GET_TRAINING_CATEGORY_WITH_TYPE } from '../../libs/graphql/queries';
import { CREATE_TRAINING } from '../../libs/graphql/mutations';
import type { GetTrainingCategoryWithTypeQuery, CreateTrainingMutation } from '../../types/generated/graphql';
import { useQuery, useMutation } from '@apollo/client';

type PlanTrainingFormValue = {
  date: Date;
  category: string;
  type: string;
  trainingWeight: string;
  count: string;
  set: string;
};

const TrainingPage: VFC = () => {
  const [open, setOpen] = useState(false);
  const { data, error, loading } = useQuery<GetTrainingCategoryWithTypeQuery>(GET_TRAINING_CATEGORY_WITH_TYPE);
  const [insertTraining, { error: mutationError }] = useMutation<CreateTrainingMutation>(CREATE_TRAINING, {
    onCompleted: () => setOpen(true),
  });
  const method = useForm<PlanTrainingFormValue>();
  const { handleSubmit } = method;

  const registerTraining: SubmitHandler<Readonly<PlanTrainingFormValue>> = (data) => {
    console.debug(data);
    //TODO:FIX user_id
    //TODO:FIX training_type_id
    insertTraining({ variables: { user_id: 1, training_type_id: 1, training_weight: data.trainingWeight, training_count: data.count, training_set: data.count, is_finish: false, date: data.date } });
  };

  const handleClose = () => {
    setOpen(true);
  };

  return (
    <FormProvider {...method}>
      <form onSubmit={handleSubmit(registerTraining)}>
        <div css={[styles.columnWrap, templates.contentArea]}>
          <h2 css={templates.title}>✏️ 日ごとの設定</h2>
          <InputForm typeAttr={'date'} type={'isInput'} placeholder={''} form={{ name: 'date', option: { required: true } }} />
          <Select form={{ name: 'category', option: { required: true } }} title={'カテゴリ'} texts={data?.training_types} marginBottom={10} />
          <Select form={{ name: 'type', option: { required: true } }} title={'種目'} texts={data?.training_categories} marginBottom={10} />
          {/* TODO:FIX texts */}
          <Select form={{ name: 'trainingWeight', option: { required: true } }} title={'重量'} texts={['10', '20', '30']} marginBottom={10} />
          <Select form={{ name: 'count', option: { required: true } }} title={'回数'} texts={['10', '20']} marginBottom={10} />
          <Select form={{ name: 'set', option: { required: true } }} title={'セット数'} texts={['10', '20']} marginBottom={10} />
        </div>
        <Input type={'isInput'} typeAttr='submit' customCss={simpleButton(10)} value={'記録する'} />
        <Snackbar text={'記録しました！'} open={open} handleClose={handleClose} />
      </form>
    </FormProvider>
  );
};

export default TrainingPage;

const styles = {
  columnWrap: css`
    display: flex;
    flex-direction: column;
  `,
};
