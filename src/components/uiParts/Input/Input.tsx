import type { VFC, Dispatch, SetStateAction } from 'react';
import { templates } from '../../../styles/template';
import { inputStyle } from './style';

interface PropsBase<T extends 'isInput' | 'isTextArea'> {
  type: T;
  title?: string;
  placeholder?: string;
  _css: typeof inputStyle;
}
interface InputProps extends PropsBase<'isInput'> {
  typeAttr: string;
  value?: string | number;
  setState?: Dispatch<SetStateAction<unknown>>;
}

interface TextAreaProps extends PropsBase<'isTextArea'> {
  name: string;
  cols: number;
  rows: number;
}

export type { InputProps, TextAreaProps };

const Input: VFC<InputProps | TextAreaProps> = (props) => {
  switch (props.type) {
    case 'isInput':
      return (
        <div css={templates.content}>
          {props.title && <p css={templates.contentTitle}>{props.title}</p>}
          <input onChange={(e) => props.setState && props.setState(e.target.value)} value={props.value} css={props._css} type={props.typeAttr} placeholder={props.placeholder} />
        </div>
      );
    case 'isTextArea':
      return (
        <div css={templates.content}>
          {props.title && <p css={templates.contentTitle}>{props.title}</p>}
          <textarea name={props.name} id='' cols={props.cols} rows={props.rows} />
        </div>
      );
    default:
      return null;
  }
};

export default Input;
