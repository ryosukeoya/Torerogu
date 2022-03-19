import React, { useState } from 'react';
import type { VFC } from 'react';
import { FormContainer, InputForm } from '../../components/entryPoint';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { getCurrentDate } from '../../utils/app';

type PlanBodyInfoFormValues = {
  date: Date;
  weight: number;
};

type Props = {
  pageIndex: number;
};

const BodyInfoPage: VFC<Props> = ({ pageIndex }) => {
  const [open, setOpen] = useState(false);
  const method = useForm<PlanBodyInfoFormValues>();
  const { handleSubmit } = method;

  const registerBodyInfo: SubmitHandler<Readonly<PlanBodyInfoFormValues>> = (data) => {
    console.debug(data);
  };

  return (
    <FormProvider {...method}>
      <FormContainer pageIndex={pageIndex} handleSubmit={handleSubmit} submitFunc={registerBodyInfo} title={'✏️ 目標体重を設定する'} open={open} handleClose={() => console.debug('hoge')}>
        <InputForm options={{ value: getCurrentDate(new Date(), true), min: getCurrentDate(new Date(), true) }} title={'日付'} type={'isInput'} typeAttr='date' placeholder='60' form={{ name: 'date', option: { required: true } }} />
        <InputForm title={'体重'} unit={'kg'} type={'isInput'} typeAttr='text' placeholder='60' form={{ name: 'weight', option: { required: true, maxLength: 3, pattern: /[0-9]/ } }} />
      </FormContainer>
    </FormProvider>
  );
};

export default BodyInfoPage;
