import type { FC, ReactNode } from 'react';
import { rippleButton } from './style';
import useRipple from '../../../hooks/useRipple';

type Props = {
  children: ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const RippleButton: FC<Props> = ({ children, onClick }) => {
  const [coords, setCoords, isRippling] = useRipple(300);

  return (
    <button
      css={rippleButton.rippleButton()}
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        onClick && onClick(e);
      }}
    >
      {isRippling ? (
        <span
          css={rippleButton.ripple}
          style={{
            left: coords.x,
            top: coords.y,
          }}
        />
      ) : (
        ''
      )}
      <span css={rippleButton.content}>{children}</span>
    </button>
  );
};

export default RippleButton;
