import { css, SerializedStyles } from '@emotion/react';
import { BORDER } from '../../../styles/const';

export const selectStyle = (marginBottom?: number, customCss?: SerializedStyles) => css`
  width: 200px;
  border: 1px solid ${BORDER.GRAY};
  margin-bottom: ${marginBottom}px;
  ${customCss};
`;
