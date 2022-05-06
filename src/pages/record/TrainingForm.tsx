import React, { VFC } from 'react';
import { SubmitHandler } from 'react-hook-form';
import { SetterOrUpdater } from 'recoil';
import { FormContainer, SelectField } from '~/components';
import { pageTemplate } from '~/styles/shares/pageTemplate';
import { getNumArr } from '~/utils';
import type { TrainingType, TrainingFormValues } from './types';

type Props = {
  pageIndex: number;
  open: boolean;
  setOpen: SetterOrUpdater<boolean>;
  selectedTrainingType: TrainingType | null;
  setSelectedTrainingType: SetterOrUpdater<TrainingType | null>;
  registerTraining: SubmitHandler<TrainingFormValues>;
};

const TrainingForm: VFC<Props> = ({ pageIndex, open, setOpen, selectedTrainingType, setSelectedTrainingType, registerTraining }) => {
  return (
    <FormContainer<TrainingFormValues>
      pageIndex={pageIndex}
      submitFunc={registerTraining}
      title={`✏️ ${selectedTrainingType?.name}`}
      open={open}
      handleClose={() => {
        setOpen(false);
      }}
      lastElm={
        <p css={pageTemplate.back} onClick={() => setSelectedTrainingType(null)}>
          ＜ カテゴリ選択に戻る
        </p>
      }
    >
      <SelectField data-testid='trainingWeight' formConf={{ name: 'trainingWeight', options: { required: true } }} title={'重量 (kg)'} texts={getNumArr(10, 200, 5)} marginBottom={42} isRequired />
      <SelectField data-testid='count' formConf={{ name: 'count', options: { required: true } }} title={'回数'} texts={getNumArr(1, 100, 1)} marginBottom={42} isRequired />
      <SelectField data-testid='set' formConf={{ name: 'set', options: { required: true } }} title={'セット数'} texts={getNumArr(1, 30, 1)} marginBottom={42} isRequired />
    </FormContainer>
  );
};

export default TrainingForm;
