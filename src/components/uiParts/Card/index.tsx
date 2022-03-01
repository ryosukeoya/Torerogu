import type { FC, ReactNode } from 'react';
import { SerializedStyles } from '@emotion/react';

type Props = {
  children: ReactNode;
  handleClick: (id: number) => void;
  id: number;
  _css: SerializedStyles;
};

const Card: FC<Props> = ({ children, handleClick, id, _css }) => {
  return (
    <div onClick={() => handleClick(id)} css={_css}>
      {children}
    </div>
  );
};

export default Card;
