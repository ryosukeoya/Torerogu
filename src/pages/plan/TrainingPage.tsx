import React, { VFC } from 'react';
import { InputForm, Select, Input } from '../../components/entryPoints';
import { inputStyle, simpleButton, selectStyle } from '../../components/styleEntryPoints';
import { templates } from '../../styles/template';
import { SubmitHandler, useForm, FormProvider } from 'react-hook-form';

const names = ['category', 'type', 'set', 'count'];
const titles = ['カテゴリ', '種目', 'セット数', '回数'];
const texts: string[][] = [
  ['胸', '背中'],
  ['ベンチプレス', 'スクワット'],
  ['10', '20'],
  ['10', '20'],
];

const TrainingPage: VFC = () => {
  const method = useForm();

  const { handleSubmit } = method;

  const registerTraining: SubmitHandler<Record<string, any>> = (data) => {
    // console.log(data);
  };

  return (
    <FormProvider {...method}>
      <form onSubmit={handleSubmit(registerTraining)}>
        <div>
          <div style={{ display: 'flex', flexDirection: 'column' }} css={templates.contentArea}>
            <h2 css={templates.title}>✏️ 日ごとの設定</h2>
            <InputForm typeAttr={'date'} type={'isInput'} placeholder={''} _css={inputStyle} form={{ name: 'date', option: { required: true } }} />
            {names.map((name, i) => {
              return <Select name={name} title={titles[i]} texts={texts[i]} option={{ required: true }} key={i} _css={selectStyle} />;
            })}
          </div>
          <Input type={'isInput'} typeAttr='submit' _css={simpleButton(10)} value={'記録する'} />
        </div>
      </form>
    </FormProvider>
  );
};

export default TrainingPage;
