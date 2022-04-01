import React, { useState } from 'react';
import type { VFC } from 'react';
import { FormContainer, InputPart } from '~/components';
import { getDateInfo } from '~/utils/app';
import { useMutation } from '@apollo/client';
import { CREATE_BODY_INFO_HISTORIES } from '~/libs/graphql/mutations';
import type { CreateBodyInfoHistoriesMutation } from '~/types/generated/graphql';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';

type BodyInfoFormValues = {
  weight: number | '';
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
  const method = useForm<BodyInfoFormValues>();
  const { handleSubmit } = method;

  const handleClose = () => {
    setOpen(false);
  };

  const date = getDateInfo(new Date());

  const registerBodyInfo: SubmitHandler<BodyInfoFormValues> = (data) => {
    // TODO:FIX
    const user_id = 1;
    if (data.bodyFatPercentage === '') {
      data.bodyFatPercentage = null;
    }
    insertBodyInfo({ variables: { height: null, weight: data.weight, body_fat_percentage: data.bodyFatPercentage, date: new Date(), user_id: user_id } });
  };

  return (
    <FormProvider {...method}>
      <FormContainer pageIndex={pageIndex} handleSubmit={handleSubmit} submitFunc={registerBodyInfo} title={` ✏️ ${date.month} / ${date.day} (${date.weekday}) の記録`} open={open} handleClose={handleClose}>
        <InputPart title='体重' type='text' unit='kg' placeholder='60' formConf={{ name: 'weight', option: { required: true, maxLength: 3, pattern: /[0-9]/ } }} />
        <InputPart title='体脂肪率' type='text' unit='%' placeholder='10' formConf={{ name: 'bodyFatPercentage', option: { maxLength: 2, pattern: /[0-9]/ } }} />
      </FormContainer>
    </FormProvider>
  );
};

export default BodyInfoPage;
