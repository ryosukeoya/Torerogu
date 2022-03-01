import { css } from '@emotion/react';
import { BORDER } from '../../../styles/const';

export const inputStyle = css`
  width: 100px;
  border: 1px solid ${BORDER.GRAY};
  border-radius: 5px;
  &::placeholder {
    text-align: right;
    padding-right: 10%;
  }
`;
