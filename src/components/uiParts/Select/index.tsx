import React from 'react';
import type { VFC } from 'react';
import { SerializedStyles } from '@emotion/react';
import { templates } from '../../../styles/template';
import { useFormContext } from 'react-hook-form';

type Props = {
  title: string;
  texts: string[];
  form: { name: string; option: { required: boolean } };
  _css: SerializedStyles;
};

const Select: VFC<Props> = ({ title, texts, form, _css }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <select {...register(form.name, form.option)} css={_css} required>
        <option value="" hidden>
          {title}
        </option>
        {texts?.map((text, i) => {
          return (
            <option key={i} value={text}>
              {text}
            </option>
          );
        })}
      </select>
      <p css={templates.errorMessage}>{errors.name?.type === 'required' && '必須項目です'}</p>
    </>
  );
};

export default Select;
