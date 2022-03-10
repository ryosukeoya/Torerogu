import { SerializedStyles } from '@emotion/react';
import type { VFC, Dispatch, SetStateAction } from 'react';
import { templates } from '../../../styles/template';
import { inputStyle, textareaStyle } from './style';

interface PropsBase<T extends 'isInput' | 'isTextArea'> {
  type: T;
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

//TODO:リファ
const Input: VFC<InputProps | TextAreaProps> = (props) => {
  switch (props.type) {
    case 'isInput':
      return (
        <div css={templates.content}>
          {props.title && <p css={templates.contentTitle}>{props.title}</p>}
          <input onChange={(e) => props.setState && props.setState(e.target.value)} value={props.value} css={props.customCss ? props.customCss : inputStyle()} type={props.typeAttr} placeholder={props.placeholder} />
        </div>
      );
    case 'isTextArea':
      return (
        <div css={templates.content}>
          {props.title && <p css={templates.contentTitle}>{props.title}</p>}
          <textarea name={props.name} placeholder={props.placeholder} css={textareaStyle()} id='' cols={props.cols} rows={props.rows} />
        </div>
      );
    default:
      return null;
  }
};

export default Input;
