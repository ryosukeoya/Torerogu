import type { VFC } from 'react';
import { templates } from '../../../styles/template';
import { useFormContext } from 'react-hook-form';
import type { InputProps, TextAreaProps } from './Input';

interface InputFormProps extends InputProps {
  form: { name: string; title: string; option: { required: boolean } };
}

interface TextAreaFormProps extends TextAreaProps {
  form: { name: string; title: string; option: { required: boolean } };
}

const InputForm: VFC<InputFormProps | TextAreaFormProps> = (props) => {
  // react-hook-form用
  const {
    register,
    formState: { errors },
  } = useFormContext();
  switch (props.type) {
    case 'isInput':
      return (
        <>
          {props.title && <p>{props.title}</p>}
          <input {...(props.form && { ...register(props.form.name, props.form.option) })} onChange={(e) => props.setState && props.setState(e.target.value)} value={props.value} css={props._css} type={props.typeAttr} placeholder={props.placeholder} />
          <p css={templates.errorMessage}>{errors[props.form.name]?.type === 'required' && '必須項目です'}</p>
        </>
      );
    case 'isTextArea':
      return (
        <>
          {props.title && <p>{props.title}</p>}
          <textarea {...(props.form && { ...register(props.form.name, props.form.option) })} name={props.name} id='' cols={props.cols} rows={props.rows} />
          <p css={templates.errorMessage}>{errors[props.form.name]?.type === 'required' && '必須項目です'}</p>
        </>
      );
    default:
      return null;
  }
};

export default InputForm;
