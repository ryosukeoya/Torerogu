import type { FC, ReactNode } from 'react';
import { rippleButton } from '~/styles/share/likeButtons';
import { ripple } from '~/styles/share/ripple';
import useRipple from '~/hooks/useRipple';

type Props = {
  children: ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const RippleButton: FC<Props> = ({ children, onClick }) => {
  const [coords, setCoords, isRippling] = useRipple(300);

  return (
    <button
      css={rippleButton()}
      onClick={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
        onClick(e);
      }}
    >
      {isRippling ? (
        <span
          css={ripple.ripple}
          style={{
            left: coords.x,
            top: coords.y,
          }}
        />
      ) : (
        ''
      )}
      <span css={ripple.content}>{children}</span>
    </button>
  );
};

export default RippleButton;
