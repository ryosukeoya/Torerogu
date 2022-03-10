import type { VFC } from 'react';
import { templates } from '../../../styles/template';
import { useFormContext, FieldErrors, FieldValues } from 'react-hook-form';
import type { InputProps, TextAreaProps } from './Input';

const ErrorMessage: VFC<{ errors: FieldErrors<FieldValues>; form: InputFormProps['form'] }> = ({ errors, form }) => {
  return (
    <p css={templates.errorMessage}>
      {errors[form.name]?.type === 'required' && '必須項目です'}
      {errors[form.name]?.type === 'pattern' && '数値を入力してください'}
      {errors[form.name]?.type === 'maxLength' && '桁数を小さくしてください'}
    </p>
  );
};

interface InputFormProps extends InputProps {
  form: { name: string; option: Record<string, unknown> };
  unit?: string;
}

interface TextAreaFormProps extends TextAreaProps {
  form: { name: string; option: Record<string, unknown> };
  unit?: string;
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
        <div css={templates.content}>
          {props.title && (
            <p css={templates.contentTitle}>
              {props.title}
              {'required' in props.form.option && <span css={templates.require}>*必須</span>}
            </p>
          )}
          <input {...(props.form && { ...register(props.form.name, props.form.option) })} onChange={(e) => props.setState && props.setState(e.target.value)} value={props.value} css={props._css} type={props.typeAttr} placeholder={props.placeholder} />
          <span css={templates.unit}>{props.unit}</span>
          <ErrorMessage errors={errors} form={props.form} />
        </div>
      );
    case 'isTextArea':
      return (
        <div css={templates.content}>
          {props.title && (
            <p>
              {props.title}
              {'required' in props.form.option && <span css={templates.require}>*必須</span>}
            </p>
          )}
          <textarea {...(props.form && { ...register(props.form.name, props.form.option) })} name={props.name} id='' cols={props.cols} rows={props.rows} />
          <ErrorMessage errors={errors} form={props.form} />
        </div>
      );
    default:
      return null;
  }
};

export default InputForm;
