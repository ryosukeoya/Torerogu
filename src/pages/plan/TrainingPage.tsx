import React, { useState, useEffect } from 'react';
import type { VFC } from 'react';
import { InputForm, Select, Input, Snackbar } from '../../components/entryPoints';
import { simpleButton } from '../../components/styleEntryPoints';
import { templates } from '../../styles/template';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { css } from '@emotion/react';
import { GET_TRAINING_CATEGORY_WITH_TYPE } from '../../libs/graphql/queries';
import { CREATE_TRAINING } from '../../libs/graphql/mutations';
import type { GetTrainingCategoryWithTypeQuery, CreateTrainingMutation } from '../../types/generated/graphql';
import { useQuery, useMutation } from '@apollo/client';

type TrainingType = Omit<GetTrainingCategoryWithTypeQuery['training_types'][number], '__typename'>;

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
  const [selectedCategoryID, setSelectedCategoryID] = useState<number>(1);

  const { data } = useQuery<GetTrainingCategoryWithTypeQuery>(GET_TRAINING_CATEGORY_WITH_TYPE);
  const [insertTraining, { error }] = useMutation<CreateTrainingMutation>(CREATE_TRAINING, {
    onCompleted: () => setOpen(true),
  });
  const method = useForm<PlanTrainingFormValue>();
  const { watch, handleSubmit } = method;
  const categoryField: string = watch('category');

  useEffect(() => {
    const categoryFieldArr:string[] = categoryField?.split(',');
    categoryFieldArr && setSelectedCategoryID(parseInt(categoryFieldArr[0]));
  }, [categoryField]);

  const registerTraining: SubmitHandler<Readonly<PlanTrainingFormValue>> = (data) => {
    //TODO:FIX user_id
    insertTraining({ variables: { user_id: 1, training_type_id: data.type[0], training_weight: data.trainingWeight, training_count: data.count, training_set: data.count, is_finish: false, date: data.date } });
  };

  const getTrainingTypes = (): Readonly<TrainingType>[] | undefined => {
    const slectedTrainingTypes = data?.training_types.filter(function (training_type) {
      return training_type.training_category_id === selectedCategoryID;
    });
    return slectedTrainingTypes;
  };

  const getNumArr = (init: number, max: number, diff: number): number[] => {
    const numArr: number[] = [];
    for (let i = init; i <= max; i = i + diff) {
      numArr.push(i);
    }
    return numArr;
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <FormProvider {...method}>
      <form onSubmit={handleSubmit(registerTraining)}>
        <div css={[styles.columnWrap, templates.contentArea]}>
          <h2 css={templates.title}>✏️ 日ごとの設定</h2>
          <InputForm typeAttr={'date'} type={'isInput'} placeholder={''} form={{ name: 'date', option: { required: true } }} />
          <Select form={{ name: 'category', option: { required: true } }} title={'カテゴリ'} texts={data?.training_categories} marginBottom={10} />
          <Select form={{ name: 'type', option: { required: true } }} title={'種目'} texts={getTrainingTypes()} marginBottom={10} />
          {/* TODO:FIX texts!!,セレクトボックスにするかテキストボックスにするか */}
          <Select form={{ name: 'trainingWeight', option: { required: true } }} title={'重量'} texts={getNumArr(10, 200, 5)} marginBottom={10} />
          <Select form={{ name: 'count', option: { required: true } }} title={'回数'} texts={getNumArr(1, 100, 1)} marginBottom={10} />
          <Select form={{ name: 'set', option: { required: true } }} title={'セット数'} texts={getNumArr(1, 30, 1)} marginBottom={10} />
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
