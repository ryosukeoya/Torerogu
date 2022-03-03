import Link from 'next/link';
import React from 'react';
import { css, SerializedStyles } from '@emotion/react';

interface PropsBase<T extends 'isButton' | 'isLinkButton'> {
  type: T;
  text: string;
  _css: SerializedStyles;
}
interface ButtonProps extends PropsBase<'isButton'> {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface LinkButtonProps extends PropsBase<'isLinkButton'> {
  href: string;
}

const Button: React.VFC<ButtonProps | LinkButtonProps> = (props) => {
  switch (props.type) {
    case 'isButton':
      return (
        <button css={style(props._css)} onClick={props.onClick}>
          {props.text}
        </button>
      );
    case 'isLinkButton':
      return (
        <Link href={props.href} passHref>
          <a css={style(props._css)}>{props.text}</a>
        </Link>
      );
    default:
      return null;
  }
};

export default Button;

const style = (_css: SerializedStyles): SerializedStyles => css`
  ${_css}
`;
