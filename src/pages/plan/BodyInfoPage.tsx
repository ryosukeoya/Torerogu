import React, { useState } from 'react';
import type { VFC } from 'react';
import { FormWrapper, InputField } from '~/components';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { getCurrentDate } from '~/utils/app';
import { css } from '@emotion/react';

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
      <FormWrapper pageIndex={pageIndex} handleSubmit={handleSubmit} submitFunc={registerBodyInfo} title={'✏️ 目標体重を設定する'} open={open} handleClose={() => console.debug('hoge')}>
        <InputField
          value={getCurrentDate(new Date(), true)}
          min={getCurrentDate(new Date(), true)}
          title='日付'
          type='date'
          placeholder='60'
          formConf={{ name: 'date', option: { required: true } }}
          customCss={css`
            cursor: pointer;
          `}
        />
        <InputField title={'体重'} unit={'kg'} type='text' placeholder='60' formConf={{ name: 'weight', option: { required: true, maxLength: 3, pattern: /[0-9]/ } }} />
      </FormWrapper>
    </FormProvider>
  );
};

export default BodyInfoPage;
