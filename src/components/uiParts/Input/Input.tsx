import { SerializedStyles } from '@emotion/react';
import React, { VFC, Dispatch, SetStateAction, ReactNode } from 'react';
import { templates } from '../../../styles/template';
import { inputStyle, textareaStyle } from './style';

interface PropsBase<T extends 'isInput' | 'isTextArea'> {
  type: T;
  options?: Record<string, unknown>;
  title?: string;
  placeholder?: string;
}
interface InputProps extends PropsBase<'isInput'> {
  typeAttr: string;
  value?: string | number;
  setState?: Dispatch<SetStateAction<unknown>>;
  customCss?: SerializedStyles;
}

interface TextAreaProps extends PropsBase<'isTextArea'> {
  cols: number;
  rows: number;
  placeholder?: string;
  name?: string;
}

export type { InputProps, TextAreaProps };

const Container: VFC<{ children: ReactNode; title: string | undefined }> = ({ children, title }) => {
  return (
    <div css={templates.content}>
      {title && <p css={templates.contentTitle}>{title}</p>}
      {children}
    </div>
  );
};

const Input: VFC<InputProps | TextAreaProps> = (props) => {
  switch (props.type) {
    case 'isInput':
      return (
        <Container title={props.title}>
          <input type={props.typeAttr} {...props.options} onChange={(e) => props.setState && props.setState(e.target.value)} value={props.value} css={props.customCss ? props.customCss : inputStyle()} placeholder={props.placeholder} />
        </Container>
      );
    case 'isTextArea':
      return (
        <Container title={props.title}>
          <textarea {...props.options} name={props.name} placeholder={props.placeholder} css={textareaStyle()} id='' cols={props.cols} rows={props.rows} />
        </Container>
      );
    default:
      return null;
  }
};

export default Input;
