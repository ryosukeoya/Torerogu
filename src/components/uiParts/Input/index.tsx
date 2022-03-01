import type { VFC } from 'react';
import { SerializedStyles } from '@emotion/react';
import { inputStyle } from './style';

interface PropsBase<T extends 'isInput' | 'isTextArea'> {
  type: T;
  placeholder?: string;
  _css: SerializedStyles;
}
interface InputProps extends PropsBase<'isInput'> {
  typeAttr: string;
}

interface TextAreaProps extends PropsBase<'isTextArea'> {
  name: string;
  cols: number;
  rows: number;
}

const Input: VFC<InputProps | TextAreaProps> = (props) => {
  switch (props.type) {
    case 'isInput':
      return <input css={inputStyle} type={props.typeAttr} placeholder={props.placeholder} />;
    case 'isTextArea':
      return <textarea name={props.name} id='' cols={props.cols} rows={props.rows} />;
    default:
      return null;
  }
};

export default Input;
