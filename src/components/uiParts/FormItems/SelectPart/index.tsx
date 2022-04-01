import React from 'react';
import type { VFC, ComponentProps } from 'react';
import { SerializedStyles } from '@emotion/react';
import { useFormContext } from 'react-hook-form';
import { formStyle } from '../formStyle';
import { selectPartStyle } from './style';

type Select = ComponentProps<'select'>;

interface Props extends Select {
  isRequired?: true;
  title: string;
  texts: any[] | undefined; // eslint-disable-line @typescript-eslint/no-explicit-any
  formConf: { name: string; option: { required: boolean } };
  marginBottom?: number;
  customCss?: SerializedStyles;
}

const SelectPart: VFC<Props> = ({ isRequired, title, texts, formConf, marginBottom: mb = 0, customCss, ...selectOptions }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div style={{ display: 'flex', alignItems: 'baseline' }}>
      <select {...selectOptions} {...register(formConf.name, formConf.option)} css={selectPartStyle(mb, customCss)} required={!!isRequired}>
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
      {isRequired && <span css={formStyle.require}>*必須</span>}
      {errors[formConf.name] ? <p css={formStyle.errorMessage}>{errors.name?.type === 'required' && '必須項目です'}</p> : null}
    </div>
  );
};

export default SelectPart;
