import React from 'react';
import type { VFC, ReactNode } from 'react';
import { formStyle } from './formStyle';
import { FieldErrors, FieldValues } from 'react-hook-form';

const ErrorMessage: VFC<{ errors: FieldErrors<FieldValues>; formConf: Required<Props>['formConf'] }> = ({ errors, formConf }) => {
  return (
    <p css={formStyle.errorMessage}>
      {errors[formConf.name]?.type === 'required' && '必須項目です'}
      {errors[formConf.name]?.type === 'pattern' && '数値を入力してください'}
      {errors[formConf.name]?.type === 'maxLength' && '桁数を小さくしてください'}
    </p>
  );
};

type Props = {
  title?: string;
  unit?: string;
  formConf?: { name: string; option: Record<string, unknown> };
  errors?: { [x: string]: unknown };
  children: ReactNode;
};

const FormItemContainer: VFC<Props> = ({ title, unit, formConf, errors, children }) => {
  return (
    <>
      <div css={formStyle.content}>
        {title && (
          <p css={formStyle.contentTitle}>
            {title}
            {formConf && formConf.option && 'required' in formConf.option && <span css={formStyle.require}>*必須</span>}
          </p>
        )}
        {children}
        <span css={formStyle.unit}>{unit}</span>
        {formConf && errors &&  <ErrorMessage errors={errors} formConf={formConf} />}
      </div>
    </>
  );
};

export default FormItemContainer;
