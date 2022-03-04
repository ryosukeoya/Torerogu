import type { FC, ReactNode } from 'react';
import { SerializedStyles } from '@emotion/react';

type Props = {
  data: object;
  children: ReactNode;
  handleClick: (data:any) => void;
  id: number;
  _css: SerializedStyles;
};

const Card: FC<Props> = ({ data, children, handleClick, id, _css }) => {
  return (
    <div onClick={() => handleClick(data)} css={_css}>
      {children}
    </div>
  );
};

export default Card;
