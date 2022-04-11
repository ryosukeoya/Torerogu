import type { VFC } from 'react';
import { rippleButton } from '~/styles/shares/likeButtons';
import { ripple } from '~/styles/shares/ripple';
import { useRipple } from '~/hooks';

type Props = {
  title: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const RippleButton: VFC<Props> = ({ title, onClick }) => {
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
          css={ripple.ripple('#ffbb54')}
          style={{
            left: coords.x,
            top: coords.y,
          }}
        />
      ) : (
        ''
      )}
      <span css={ripple.content}>{title}</span>
    </button>
  );
};

export default RippleButton;
