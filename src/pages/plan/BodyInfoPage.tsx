import React, { VFC } from 'react';
import { Input, InputForm } from '../../components/entryPoints';
import { simpleButton } from '../../components/styleEntryPoints';
import { templates } from '../../styles/template';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';

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
      <form onSubmit={handleSubmit(registerBodyInfo)}>
        <div css={templates.contentArea}>
          <h2 css={templates.title}>✏️ 目標体重を設定する</h2>
          <div css={templates.content}>
            <InputForm title={'日付'} type={'isInput'} typeAttr='date' placeholder='60' form={{ name: 'date', option: { required: true } }} />
          </div>
          <div css={templates.content}>
            <InputForm title={'体重'} unit={'kg'} type={'isInput'} typeAttr='text' placeholder='60' form={{ name: 'weight', option: { required: true, maxLength: 3, pattern: /[0-9]/ } }} />
          </div>
        </div>
        <Input type={'isInput'} typeAttr='submit' customCss={simpleButton(10)} value={'記録する'} />
      </form>
    </FormProvider>
  );
};

export default BodyInfoPage;
