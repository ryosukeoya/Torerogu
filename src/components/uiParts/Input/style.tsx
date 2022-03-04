import { css } from '@emotion/react';
import { BORDER } from '../../../styles/const';

export const inputStyle = css`
  width: 100px;
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
`;
