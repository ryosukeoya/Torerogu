import type { VFC, PropsWithChildren } from 'react';
import { templates } from '../../../styles/template';
import { useFormContext, FieldErrors, FieldValues } from 'react-hook-form';
import type { InputProps, TextAreaProps } from './Input';
import { inputStyle, textareaStyle } from './style';
import React from 'react';

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

const Container: VFC<PropsWithChildren<(InputFormProps & { errors: Record<string, any> }) | (TextAreaFormProps & { errors: Record<string, any> })>> = (props) => {
  return (
    <div css={templates.content}>
      {props.title && (
        <p css={templates.contentTitle}>
          {props.title}
          {'required' in props.form.option && <span css={templates.require}>*必須</span>}
        </p>
      )}
      {props.children}
      <span css={templates.unit}>{props.unit}</span>
      <ErrorMessage errors={props.errors} form={props.form} />
    </div>
  );
};

const InputForm: VFC<InputFormProps | TextAreaFormProps> = (props) => {
  // react-hook-form用
  const {
    register,
    formState: { errors },
  } = useFormContext();

  switch (props.type) {
    case 'isInput':
      return (
        <Container {...props} errors={errors}>
          <input type={props.typeAttr} {...props.options} {...(props.form && { ...register(props.form.name, props.form.option) })} onChange={(e) => props.setState && props.setState(e.target.value)} value={props.value} css={inputStyle()} placeholder={props.placeholder} />
        </Container>
      );
    case 'isTextArea':
      return (
        <Container {...props} errors={errors}>
          <textarea {...(props.form && { ...register(props.form.name, props.form.option) })} css={textareaStyle()} placeholder={props.placeholder} name={props.name} id='' cols={props.cols} rows={props.rows} />
        </Container>
      );
    default:
      return null;
  }
};

export default InputForm;
