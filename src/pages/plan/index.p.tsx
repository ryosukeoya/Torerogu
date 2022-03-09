import type { NextPage } from 'next';
import React, { VFC } from 'react';
import { Input, Button, Select } from '../../components/_indexs';
import { inputStyle, simpleButton, selectStyle } from '../../components/_styles';
import { headerTabIndexAtom } from '../../store';
import { useRecoilValue } from 'recoil';
import { WEEK_DAYS } from '../../constants';
import { templates } from '../../styles/template';
import { SubmitHandler, useForm } from 'react-hook-form';

const titles = ['曜日', 'カテゴリ', '種目', 'セット数', '回数'];

type PlanBodyInfoFormValues = {
  date: Date;
  weight: number;
};

const Plan: NextPage<VFC> = () => {
  const activeIndex = useRecoilValue(headerTabIndexAtom);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<any>();

  const registerPlan: SubmitHandler<PlanBodyInfoFormValues> = (data) => {
    console.log('register!!');
    console.log(data);
  };

  if (activeIndex === 0) {
    return (
      <>
        <form onSubmit={handleSubmit(registerPlan)}>
          <div css={templates.contentArea}>
            <h2 css={templates.title}>✏️ 目標体重を設定する</h2>
            <div css={templates.content}>
              <p>日付</p>
              {/* <Input type={'isInput'} typeAttr='date' _css={inputStyle} /> */}
              <input {...register('date', { required: true })} type='date' css={inputStyle} />
              <p css={templates.errorMessage}>
                {errors.date?.type === 'required' && '必須項目です'}
              </p>
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
  } else if (activeIndex === 1) {
    return (
      <div>
        <div style={{ display: 'flex', flexDirection: 'column' }} css={templates.contentArea}>
          <h2 css={templates.title}>✏️ 週ごとの設定</h2>
          <Input type={'isInput'} typeAttr='date' _css={inputStyle} />
          {titles.map((title, i) => {
            return <Select key={i} title={title} texts={WEEK_DAYS} _css={selectStyle} />;
          })}
        </div>

        <Button type={'isButton'} text={'記録する'} _css={simpleButton(10)} />
      </div>
    );
  } else {
    return null;
  }
};

export default Plan;
