import React from 'react';
import type { VFC, ComponentProps } from 'react';
import { css, SerializedStyles } from '@emotion/react';
import { useFormContext } from 'react-hook-form';
import { formFieldStyle } from './formFieldStyle';
import { COLOR } from '~/styles/const';

type Select = ComponentProps<'select'>;

interface Props extends Select {
  isRequired?: true;
  title: string;
  texts: any[] | undefined; // eslint-disable-line @typescript-eslint/no-explicit-any
  formConf: { name: string; option: { required: boolean } };
  marginBottom?: number;
  customCss?: SerializedStyles;
}

const SelectField: VFC<Props> = ({ isRequired, title, texts, formConf, marginBottom: mb = 0, customCss, ...selectOptions }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <div style={{ display: 'flex', alignItems: 'baseline' }}>
      <select {...selectOptions} {...register(formConf.name, formConf.option)} css={selectFieldStyle(mb, customCss)} required={!!isRequired}>
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
      {isRequired && <span css={formFieldStyle.require}>*必須</span>}
      {errors[formConf.name] ? <p css={formFieldStyle.errorMessage}>{errors.name?.type === 'required' && '必須項目です'}</p> : null}
    </div>
  );
};

export default SelectField;

const disableDefaultStyle = css`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

const selectFieldStyle = (marginBottom?: number, customCss?: SerializedStyles) => css`
  ${disableDefaultStyle}
  color:black;
  width: 200px;
  border: 1px solid ${COLOR.BORDER_GRAY};
  padding: 4px 10px;
  margin-bottom: ${marginBottom}px;
  border-radius: 5px;
  background: url(/imgs/down-arrow.png) no-repeat right 10px center / 16px auto;
  cursor: pointer;
  ${customCss};
`;
