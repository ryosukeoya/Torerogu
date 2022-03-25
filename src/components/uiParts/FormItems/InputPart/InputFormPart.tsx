import type { VFC, PropsWithChildren } from 'react';
import { useFormContext, FieldErrors, FieldValues } from 'react-hook-form';
import type { InputProps, TextAreaProps } from './InputPart';
import { inputPartStyle, textareaStyle } from './style';
import { formStyle } from '../formStyle';

interface InputFormProps extends InputProps {
  form: { name: string; option: Record<string, unknown> };
  unit?: string;
}

interface TextAreaFormProps extends TextAreaProps {
  form: { name: string; option: Record<string, unknown> };
  unit?: string;
}

const ErrorMessage: VFC<{ errors: FieldErrors<FieldValues>; form: InputFormProps['form'] }> = ({ errors, form }) => {
  return (
    <p css={formStyle.errorMessage}>
      {errors[form.name]?.type === 'required' && '必須項目です'}
      {errors[form.name]?.type === 'pattern' && '数値を入力してください'}
      {errors[form.name]?.type === 'maxLength' && '桁数を小さくしてください'}
    </p>
  );
};

const Container: VFC<PropsWithChildren<Pick<InputFormProps, 'form' | 'unit' | 'title'>> & { errors: FieldErrors<FieldValues> }> = ({ children, form, unit, title, errors }) => {
  return (
    <div css={formStyle.content}>
      {title && (
        <p css={formStyle.contentTitle}>
          {title}
          {'required' in form.option && <span css={formStyle.require}>*必須</span>}
        </p>
      )}
      {children}
      <span css={formStyle.unit}>{unit}</span>
      <ErrorMessage errors={errors} form={form} />
    </div>
  );
};

const InputFormPart: VFC<InputFormProps | TextAreaFormProps> = ({ options, title, placeholder, form, unit, ...props }) => {
  // react-hook-form用
  const {
    register,
    formState: { errors },
  } = useFormContext();

  switch (props.type) {
    case 'isInput':
      const { typeAttr, setState } = props;
      return (
        <Container form={form} unit={unit} title={title} errors={errors}>
          <input {...options} type={typeAttr} {...(form && { ...register(form.name, form.option) })} onChange={(e) => setState && setState(e.target.value)} css={inputPartStyle.input()} placeholder={placeholder} />
        </Container>
      );
    case 'isTextArea':
      const { cols, rows, name } = props;
      return (
        <Container form={form} unit={unit} title={title} errors={errors}>
          <textarea {...(form && { ...register(form.name, form.option) })} css={textareaStyle()} placeholder={placeholder} name={name} id='' cols={cols} rows={rows} />
        </Container>
      );
    default:
      return null;
  }
};

export default InputFormPart;
