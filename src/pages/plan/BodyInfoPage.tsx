import React, { useState } from 'react';
import type { VFC } from 'react';
import { FormWrapper, InputField } from '~/components';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { getCurrentDate } from '~/utils/app';
import { CREATE_BODY_INFO_HISTORIES } from '~/libs/graphql/mutations';
import { useMutation } from '@apollo/client';
import type { CreateBodyInfoHistoriesMutation } from '~/types/generated/graphql';

type PlanBodyInfoFormValues = {
  date: Date;
  weight: number;
  bodyFatPercentage: number | '' | null;
};

type Props = {
  pageIndex: number;
};

const BodyInfoPage: VFC<Props> = ({ pageIndex }) => {
  const [open, setOpen] = useState(false);
  const [insertBodyInfo, {}] = useMutation<CreateBodyInfoHistoriesMutation>(CREATE_BODY_INFO_HISTORIES, {
    onCompleted: () => setOpen(true),
  });
  const method = useForm<PlanBodyInfoFormValues>();
  const { handleSubmit } = method;

  // TODO リファ Container Presenter recordページと同じことを書いている
  const handleClose = () => {
    setOpen(false);
  };

  const registerBodyInfo: SubmitHandler<PlanBodyInfoFormValues> = (data) => {
    // TODO:FIX
    const user_id = 1;
    if (data.bodyFatPercentage === '') {
      data.bodyFatPercentage = null;
    }
    insertBodyInfo({ variables: { height: null, weight: data.weight, body_fat_percentage: data.bodyFatPercentage, date: new Date(), user_id: user_id, is_record: false } });
  };

  return (
    <FormProvider {...method}>
      <FormWrapper pageIndex={pageIndex} handleSubmit={handleSubmit} submitFunc={registerBodyInfo} title={'✏️ 目標体重を設定する'} open={open} handleClose={handleClose}>
        <InputField required value={getCurrentDate(new Date(), true)} min={getCurrentDate(new Date(), true)} title='日付' type='date' placeholder='60' formConf={{ name: 'date', option: { required: true } }} />
        <InputField title='体重' unit='kg' type='text' placeholder='60' formConf={{ name: 'weight', option: { required: true, maxLength: 3, pattern: /[0-9]/ } }} />
        <InputField title='体脂肪率' type='text' unit='%' placeholder='10' formConf={{ name: 'bodyFatPercentage', option: { maxLength: 2, pattern: /[0-9]/ } }} />
      </FormWrapper>
    </FormProvider>
  );
};

export default BodyInfoPage;
