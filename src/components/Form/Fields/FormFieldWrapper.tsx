import React from 'react';
import type { VFC, ReactNode } from 'react';
import { fieldStyle } from './fieldStyle';
import { FieldErrors, FieldValues } from 'react-hook-form';
import { css } from '@emotion/react';
import { FONT } from '~/styles/const';

const ErrorMessage: VFC<{ errors: FieldErrors<FieldValues>; formConf: Required<Props>['formConf'] }> = ({ errors, formConf }) => {
  return (
    <p css={fieldStyle.errorMessage}>
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
    <div css={formFieldWrapperStyle.content({ paddingBottom: 10 })}>
      {title && (
        <p css={formFieldWrapperStyle.contentTitle}>
          {title}
          {formConf && formConf.option && 'required' in formConf.option && <span css={fieldStyle.require}>*必須</span>}
        </p>
      )}
      {children}
      <span css={formFieldWrapperStyle.unit}>{unit}</span>
      {formConf && errors && <ErrorMessage errors={errors} formConf={formConf} />}
    </div>
  );
};

export default FormFieldWrapper;

export const formFieldWrapperStyle = {
  content: (custom?: { paddingBottom: number }) => css`
    padding-bottom: ${!custom?.paddingBottom ? '20px' : `${custom.paddingBottom}px`};
  `,
  contentTitle: css`
    display: flex;
    font-size: ${FONT.LARGE};
    padding-bottom: 10px;
  `,
  unit: css`
    padding-left: 4px;
  `,
};
