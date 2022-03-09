import type { VFC, Dispatch, SetStateAction } from 'react';
import { inputStyle } from './style';

interface PropsBase<T extends 'isInput' | 'isTextArea'> {
  type: T;
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
        <>
          <input onChange={(e) => props.setState && props.setState(e.target.value)} value={props.value} css={props._css} type={props.typeAttr} placeholder={props.placeholder} />
        </>
      );
    case 'isTextArea':
      return <textarea name={props.name} id='' cols={props.cols} rows={props.rows} />;
    default:
      return null;
  }
};

export default Input;
