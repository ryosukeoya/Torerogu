import React, { useState } from 'react';
import type { VFC } from 'react';
import { Input, InputForm, Snackbar } from '../../components/entryPoints';
import { simpleButton } from '../../components/styleEntryPoints';
import { getDateInfo } from '../../utils';
import { useMutation } from '@apollo/client';
import { CREATE_BODY_INFO_HISTORIES } from '../../libs/graphql/mutations';
import type { CreateBodyInfoHistoriesMutation } from '../../types/generated/graphql';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';
import { templates } from '../../styles/template';

type BodyInfoFormValues = {
  weight: number | '';
  bodyFatPercentage: number | '' | null;
};

const BodyInfoPage: VFC = () => {
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
      <form onSubmit={handleSubmit(registerBodyInfo)}>
        <div css={templates.contentArea}>
          <h2 css={templates.title}>
            ✏️ {date.month} / {date.day} ({date.weekday}) の記録
          </h2>
          <InputForm title={'体重'} typeAttr={'text'} unit={'kg'} type={'isInput'} placeholder={'60'} form={{ name: 'weight', option: { required: true, maxLength: 3, pattern: /[0-9]/ } }} />
          <InputForm title={'体脂肪率'} typeAttr={'text'} unit={'%'} type={'isInput'} placeholder={'10'} form={{ name: 'bodyFatPercentage', option: { maxLength: 2, pattern: /[0-9]/ } }} />
          <Input type={'isInput'} typeAttr='submit' customCss={simpleButton(10)} value={'記録する'} />
        </div>
        <Snackbar text={'記録しました！'} open={open} handleClose={handleClose} />
      </form>
    </FormProvider>
  );
};

export default BodyInfoPage;
