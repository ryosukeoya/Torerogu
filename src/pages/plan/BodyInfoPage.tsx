import React, { useState } from 'react';
import type { VFC } from 'react';
import { FormContainer, InputField } from '~/components';
import { SubmitHandler } from 'react-hook-form';
import { getStringTypeDate } from '~/utils/app';
import { useMutation } from '@apollo/client';
import { CreateBodyInfoHistoriesDocument, CreateBodyInfoHistoriesMutation, CreateBodyInfoHistoriesMutationVariables } from '~/libs/graphql/generated/graphql';

type PlanBodyInfoFormValues = {
  date: Date;
  weight: string;
  bodyFatPercentage: string | '' | null;
};

type Props = {
  pageIndex: number;
};

const BodyInfoPage: VFC<Props> = ({ pageIndex }) => {
  const [open, setOpen] = useState(false);
  const [insertBodyInfo, {}] = useMutation<CreateBodyInfoHistoriesMutation>(CreateBodyInfoHistoriesDocument, {
    onCompleted: () => setOpen(true),
  });

  const registerBodyInfo: SubmitHandler<PlanBodyInfoFormValues> = (data) => {
    // TODO:FIX
    const user_id = 1;

    insertBodyInfo({
      variables: {
        height: null,
        weight: Number(data.weight),
        body_fat_percentage: data.bodyFatPercentage !== '' ? Number(data.bodyFatPercentage) : null,
        date: getStringTypeDate(data.date),
        user_id: user_id,
        is_record: false,
      } as CreateBodyInfoHistoriesMutationVariables,
    });
  };

  return (
    <FormContainer<PlanBodyInfoFormValues> pageIndex={pageIndex} submitFunc={registerBodyInfo} title={'✏️ 目標体重を設定する'} open={open} handleClose={() => setOpen(false)}>
      <InputField required type='date' title='日付' min={getStringTypeDate(new Date(), 'YYYY-MM-DD')} placeholder='60' formConf={{ name: 'date', options: { required: true } }} />
      <InputField title='体重' type='text' unit='kg' placeholder='60' formConf={{ name: 'weight', options: { required: true, maxLength: 3, pattern: /[0-9]/ } }} />
      <InputField title='体脂肪率' type='text' unit='%' placeholder='10' formConf={{ name: 'bodyFatPercentage', options: { maxLength: 2, pattern: /[0-9]/ } }} />
    </FormContainer>
  );
};

export default BodyInfoPage;
