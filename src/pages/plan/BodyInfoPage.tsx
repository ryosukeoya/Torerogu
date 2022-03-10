import React, { VFC } from 'react';
import { Input } from '../../components/entryPoints';
import { inputStyle, simpleButton } from '../../components/styleEntryPoints';
import { templates } from '../../styles/template';
import { SubmitHandler, useForm } from 'react-hook-form';

type PlanBodyInfoFormValues = {
  date: Date;
  weight: number;
};

const BodyInfoPage: VFC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<PlanBodyInfoFormValues>();

  const registerBodyInfo: SubmitHandler<Readonly<PlanBodyInfoFormValues>> = (data) => {
    console.debug(`registerBody!!${data}`);
  };

  return (
    <>
      <form onSubmit={handleSubmit(registerBodyInfo)}>
        <div css={templates.contentArea}>
          <h2 css={templates.title}>✏️ 目標体重を設定する</h2>
          <div css={templates.content}>
            <p>日付</p>
            {/* <Input type={'isInput'} typeAttr='date' _css={inputStyle} /> */}
            <input {...register('date', { required: true })} type='date' css={inputStyle} />
            <p css={templates.errorMessage}>{errors.date?.type === 'required' && '必須項目です'}</p>
          </div>
          <div css={templates.content}>
            <p>体重</p>
            {/* <Input type={'isInput'} typeAttr='text' placeholder='60' _css={inputStyle} /> */}
            <input {...register('weight', { required: true, maxLength: 3, pattern: /[0-9]/ })} placeholder={'60'} css={inputStyle} />
            <span>kg</span>
            <p css={templates.errorMessage}>
              {errors.weight?.type === 'required' && '必須項目です'}
              {errors.weight?.type === 'pattern' && '数値を入力してください'}
              {errors.weight?.type === 'maxLength' && '3桁以下にしてください'}
            </p>
          </div>
        </div>
        {/* <Button type={'isButton'} text={'記録する'} _css={simpleButton(10)} /> */}
        <Input type={'isInput'} typeAttr='submit' _css={simpleButton(10)} value={'記録する'} />
      </form>
    </>
  );
};

export default BodyInfoPage;
