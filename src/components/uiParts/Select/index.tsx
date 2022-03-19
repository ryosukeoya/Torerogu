import React from 'react';
import type { VFC } from 'react';
import { SerializedStyles } from '@emotion/react';
import { pageTemplate } from '../../../styles/pageTemplate';
import { useFormContext } from 'react-hook-form';
import { selectStyle } from './style';

type Props = {
  isRequired?: true;
  title: string;
  texts: any[] | undefined; // eslint-disable-line @typescript-eslint/no-explicit-any
  form: { name: string; option: { required: boolean } };
  marginBottom?: number;
  customCss?: SerializedStyles;
};

const Select: VFC<Props> = ({ isRequired, title, texts, form, marginBottom: mb = 0, customCss }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      <select {...register(form.name, form.option)} css={selectStyle(mb, customCss)} required={!!isRequired}>
        <option value='' hidden>
          {title}
        </option>
        {texts?.map((text, i) => {
          return (
            <option key={i} value={text?.id ? [text.id, text.name] : text}>
              {text?.id ? text.name : text}
            </option>
          );
        })}
      </select>
      {isRequired && <span css={pageTemplate.require}>*必須</span>}
      <p css={pageTemplate.errorMessage}>{errors.name?.type === 'required' && '必須項目です'}</p>
    </>
  );
};

export default Select;
