import type { FC, ReactNode } from 'react';
import { SerializedStyles } from '@emotion/react';

type Props = {
  children: ReactNode;
  _css: SerializedStyles;
};

const Card: FC<Props> = ({ children, _css }) => {
  return <div css={_css}>{children}</div>;
};

export default Card;
