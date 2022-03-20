import { SerializedStyles } from '@emotion/react';
import React, { VFC, Dispatch, SetStateAction, ReactNode } from 'react';
import { pageTemplate } from '~/styles/share/pageTemplate';
import { inputStyle, textareaStyle } from './style';
import useRipple from '~/hooks/useRipple';
import { rippleButton } from '../RippleButton/style';

interface PropsBase<T extends 'isInput' | 'isTextArea' | 'base'> {
  type: T;
  options?: Record<string, unknown>;
  title?: string;
  placeholder?: string;
}
interface InputProps extends PropsBase<'isInput'> {
  isRipple?: true;
  typeAttr: string;
  setState?: Dispatch<SetStateAction<unknown>>;
  customCss?: SerializedStyles;
}

interface TextAreaProps extends PropsBase<'isTextArea'> {
  cols: number;
  rows: number;
  name?: string;
}

export type { PropsBase, InputProps, TextAreaProps };

type ContainerProps = {
  children: ReactNode;
  title: string | undefined;
};

const Container: VFC<ContainerProps> = ({ children, title }) => {
  return (
    <div css={pageTemplate.content} style={{ display: 'inline-block', margin: '0 auto' }}>
      {title && <p css={pageTemplate.contentTitle}>{title}</p>}
      {children}
    </div>
  );
};

const Input: VFC<InputProps | TextAreaProps> = ({ options, title, placeholder, ...props }) => {
  const [coords, setCoords, isRippling] = useRipple(300);

  switch (props.type) {
    case 'isInput':
      const { isRipple, typeAttr, setState, customCss } = props;
      return (
        <Container title={title}>
          <div
            css={isRipple && rippleButton.rippleButton()}
            onClick={
              isRipple &&
              ((e: React.MouseEvent<HTMLDivElement>) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
              })
            }
          >
            <input style={{ width: '100%', height: '100%' }} type={typeAttr} {...options} onChange={(e) => setState && setState(e.target.value)} css={customCss ? customCss : inputStyle()} placeholder={placeholder} />
            {isRipple && isRippling ? (
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
          </div>
        </Container>
      );
    case 'isTextArea':
      const { cols, rows, name } = props;
      return (
        <Container title={title}>
          <textarea {...options} name={name} placeholder={placeholder} css={textareaStyle()} id='' cols={cols} rows={rows} />
        </Container>
      );
    default:
      return null;
  }
};

export default Input;
