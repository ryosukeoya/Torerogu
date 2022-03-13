import React, { VFC } from 'react';
import { FormContainer, InputForm } from '../../components/entryPoints';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { getCurrentDate } from '../../utils';

type PlanBodyInfoFormValues = {
  date: Date;
  weight: number;
};

const BodyInfoPage: VFC = () => {
  const method = useForm<PlanBodyInfoFormValues>();
  const { handleSubmit } = method;

  const registerBodyInfo: SubmitHandler<Readonly<PlanBodyInfoFormValues>> = (data) => {
    console.debug(data);
  };

  return (
    <FormProvider {...method}>
      <FormContainer handleSubmit={handleSubmit} submitFunc={registerBodyInfo} title={'✏️ 目標体重を設定する'} open={false} handleClose={() => console.debug('hoge')}>
        <InputForm options={{ value: getCurrentDate(new Date(), true), min: getCurrentDate(new Date(), true) }} title={'日付'} type={'isInput'} typeAttr='date' placeholder='60' form={{ name: 'date', option: { required: true } }} />
        <InputForm title={'体重'} unit={'kg'} type={'isInput'} typeAttr='text' placeholder='60' form={{ name: 'weight', option: { required: true, maxLength: 3, pattern: /[0-9]/ } }} />
      </FormContainer>
    </FormProvider>
  );
};

export default BodyInfoPage;
