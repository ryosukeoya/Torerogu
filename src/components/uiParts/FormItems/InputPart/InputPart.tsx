import { SerializedStyles } from '@emotion/react';
import React, { VFC, Dispatch, SetStateAction, ReactNode } from 'react';
import { pageTemplate } from '~/styles/share/pageTemplate';
import { inputStyle, textareaStyle, submitStyle } from './style';
import { useRipple } from '~/hooks';
import { rippleButton } from '~/styles/share/likeButtons';
import { ripple } from '~/styles/share/ripple';
import { css } from '@emotion/react';

interface PropsBase<T extends 'isInput' | 'isTextArea' | 'isSubmit' | 'base'> {
  type: T;
  options?: Record<string, unknown>;
  title?: string;
  placeholder?: string;
}

interface InputProps extends PropsBase<'isInput'> {
  typeAttr: 'text' | 'date' | 'email' | 'tel';
  setState?: Dispatch<SetStateAction<unknown>>;
  customCss?: SerializedStyles;
}

interface TextAreaProps extends PropsBase<'isTextArea'> {
  cols: number;
  rows: number;
  name?: string;
}

interface SubmitRippleProps extends PropsBase<'isSubmit'> {
  customCss?: SerializedStyles;
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

const InputPart: VFC<InputProps | TextAreaProps | SubmitRippleProps> = ({ options, title, placeholder, ...props }) => {
  const [coords, setCoords, isRippling] = useRipple(300);

  switch (props.type) {
    case 'isInput':
      const { typeAttr, setState, customCss } = props;
      return (
        <Container title={title}>
          <input {...options} type={typeAttr} onChange={(e) => setState && setState(e.target.value)} css={customCss ? customCss : inputStyle.input()} placeholder={placeholder} />
        </Container>
      );
    case 'isTextArea':
      const { cols, rows, name } = props;
      return (
        <Container title={title}>
          <textarea {...options} name={name} placeholder={placeholder} css={textareaStyle()} id='' cols={cols} rows={rows} />
        </Container>
      );
    case 'isSubmit':
      return (
        <Container title={title}>
          <div
            css={rippleButton(15,true,css`padding: 0;`)} // prettier-ignore
            onClick={(e: React.MouseEvent<HTMLDivElement>) => {
              const rect = e.currentTarget.getBoundingClientRect();
              setCoords({ x: e.clientX - rect.left, y: e.clientY - rect.top });
            }}
          >
            <span css={inputStyle.inputTitle}>記録する</span>
            {/* <input {...options} value={''} type='submit' css={[submitStyle, props.customCss]} /> */}
            <input {...options} value='' type='submit' css={[submitStyle, props.customCss]} />
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
          </div>
        </Container>
      );
    default:
      return null;
  }
};

export default InputPart;
