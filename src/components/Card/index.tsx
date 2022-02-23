import type { FC, ReactNode } from 'react';
import { css, SerializedStyles } from '@emotion/react';

type Props = {
  children: ReactNode;
  _css: SerializedStyles;
};

export const Card: FC<Props> = ({ children, _css }) => {
  return <div css={_css}>{children}</div>;
};
