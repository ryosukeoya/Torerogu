import React, { useState } from 'react';
import type { VFC } from 'react';
import { InputForm, Select, Input, Snackbar } from '../../components/entryPoints';
import { simpleButton, selectStyle } from '../../components/styleEntryPoints';
import { templates } from '../../styles/template';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { css } from '@emotion/react';
import { CREATE_TRAINING } from '../../libs/graphql/mutations';
import type { CreateTrainingMutation } from '../../types/generated/graphql';
import { useQuery, useMutation } from '@apollo/client';

//TODO:FIX
const names = ['category', 'type', 'trainingWeight', 'count', 'set'];
const titles = ['カテゴリ', '種目', '重量', '回数', 'セット数'];
const texts: string[][] = [
  ['胸', '背中'],
  ['ベンチプレス', 'スクワット'],
  ['10', '20', '30'],
  ['10', '20'],
  ['10', '20'],
];

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
  const [insertTraining, { error }] = useMutation<CreateTrainingMutation>(CREATE_TRAINING, {
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
          {names.map((name, i) => {
            return <Select form={{ name: name, option: { required: true } }} title={titles[i]} texts={texts[i]} key={i} _css={selectStyle(10)} />;
          })}
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
