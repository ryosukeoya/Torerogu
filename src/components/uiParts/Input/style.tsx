import { css, SerializedStyles } from '@emotion/react';
import { BORDER } from '../../../styles/const';

export const inputStyle = (customCss?: SerializedStyles) => css`
  width: 200px;
  border: 1px solid ${BORDER.GRAY};
  background-color: #fff;
  border-radius: 5px;
  text-align: right;
  padding: 2px 10px;
  &::placeholder {
  }
  &:focus {
    border: 1.5px solid rgba(255,153,0,0.7)};
  }
  ${customCss}
`;

export const textareaStyle = (customCss?: SerializedStyles) => css`
  border: 1px solid ${BORDER.GRAY};
  background-color: #fff;
  border-radius: 15px;
  text-align: left;
  padding: 7px 10px;
  &:focus {
    border: 1.5px solid rgba(255,153,0,0.7)};
  }
  ${customCss}
`;
