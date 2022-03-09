import type { FC, ReactNode } from 'react';
import { SerializedStyles } from '@emotion/react';

type Props = {
  data: object;
  children: ReactNode;
  handleClick: (data: any) => void; // eslint-disable-line @typescript-eslint/no-explicit-any
  _css: SerializedStyles;
};

const Card: FC<Props> = ({ data, children, handleClick, _css }) => {
  return (
    <div onClick={() => handleClick(data)} css={_css}>
      {children}
    </div>
  );
};

export default Card;
