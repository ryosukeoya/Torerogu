import Link from 'next/link';
import { useCallback } from 'react';
import type { VFC } from 'react';
import { ButtonTheme } from './types';
import { baseLookLikeButton } from '~/styles/shares';
import { COLOR } from '~/styles/const';
import { css } from '@emotion/react';

interface PropsBase<T extends 'isButton' | 'isLinkButton'> {
  type: T;
  title: string;
  theme: ButtonTheme;
}

interface ButtonProps extends PropsBase<'isButton'> {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface LinkButtonProps extends PropsBase<'isLinkButton'> {
  href: string;
}

const PrimaryButton: VFC<ButtonProps | LinkButtonProps> = ({ title, theme, ...rest }) => {
  const themeCss = useGetTheme(theme);

  switch (rest.type) {
    case 'isButton':
      const { onClick } = rest;
      return (
        <button css={themeCss} onClick={onClick}>
          {title}
        </button>
      );
    case 'isLinkButton':
      const { href } = rest;
      return (
        <Link href={href} passHref>
          <a css={themeCss}>{title}</a>
        </Link>
      );
    default:
      return null;
  }
};

export default PrimaryButton;

const useGetTheme = (theme: ButtonTheme) => {
  const themeCss = useCallback(() => {
    if (theme === 'simple') {
      return simpleButton();
    } else if (theme === 'toggle') {
      return toggleColorButton();
    } else {
      return;
    }
  }, [theme]);
  return [themeCss];
};

// hover時は少し透明になる基本のボタン
const simpleButton = (marginTop?: number) => css`
  ${baseLookLikeButton};
  color: white;
  background-color: ${COLOR.ORANGE};
  margin-top: ${marginTop};
  @media (hover: hover) {
    &:hover {
      opacity: 0.8;
    }
  }
`;

// hoverでボタンの文字色と背景の色が切り替わる
const toggleColorButton = (marginTop?: number) => css`
  ${baseLookLikeButton};
  color: ${COLOR.ORANGE};
  background-color: white;
  border: 1px solid ${COLOR.ORANGE};
  margin-top: ${marginTop};
  @media (hover: hover) {
    &:hover {
      color: white;
      background-color: ${COLOR.ORANGE};
    }
  }
`;
