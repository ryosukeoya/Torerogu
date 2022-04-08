import React from 'react';
import type { VFC, ReactNode } from 'react';
import { FieldErrors, FieldValues } from 'react-hook-form';
import { formFieldStyle } from './formFieldStyle';

const ErrorMessage: VFC<{ errors: FieldErrors<FieldValues>; formConf: Required<Props>['formConf'] }> = ({ errors, formConf }) => {
  return (
    <p css={formFieldStyle.errorMessage}>
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

const FormFieldWrapper: VFC<Props> = ({ title, unit, formConf, errors, children }) => {
  return (
    <div css={formFieldStyle.content({ paddingBottom: 10 })}>
      {title && (
        <p css={formFieldStyle.contentTitle}>
          {title}
          {formConf && formConf.option && 'required' in formConf.option && <span css={formFieldStyle.require}>*必須</span>}
        </p>
      )}
      {children}
      <span css={formFieldStyle.unit}>{unit}</span>
      {formConf && errors && <ErrorMessage errors={errors} formConf={formConf} />}
    </div>
  );
};

export default FormFieldWrapper;
