import React from 'react';
import { RequireOne } from '../../types/utile';
import { css, SerializedStyles } from '@emotion/react';
import { BORDER } from '../../styles/const';

type Props = RequireOne<{
  isInput?: boolean;
  isTextArea?: boolean;
  type: string;
  placeholder?: string;
  _css: SerializedStyles;
}>;

export const Input: React.VFC<Props> = ({ isInput, isTextArea, type, placeholder, _css }) => {
  if (isInput) {
    return <input css={inputStyle} type={type} placeholder={placeholder} />;
  } else if (isTextArea) {
    return <textarea name='' id='' cols={30} rows={10} />;
  } else {
    return null;
  }
};

export const inputStyle = css`
  width: 100px;
  border: 1px solid ${BORDER.GRAY};
  border-radius: 5px;
  &::placeholder {
    text-align: right;
    padding-right: 10%;
  }
`;
