import type { VFC, PropsWithChildren } from 'react';
import { pageTemplate } from '~/styles/share/pageTemplate';
import { useFormContext, FieldErrors, FieldValues } from 'react-hook-form';
import type { InputProps, TextAreaProps } from './Input';
import { inputStyle, textareaStyle } from './style';

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
    <p css={pageTemplate.errorMessage}>
      {errors[form.name]?.type === 'required' && '必須項目です'}
      {errors[form.name]?.type === 'pattern' && '数値を入力してください'}
      {errors[form.name]?.type === 'maxLength' && '桁数を小さくしてください'}
    </p>
  );
};

const Container: VFC<PropsWithChildren<Pick<InputFormProps, 'form' | 'unit' | 'title'>> & { errors: FieldErrors<FieldValues> }> = ({ children, form, unit, title, errors }) => {
  return (
    <div css={pageTemplate.content}>
      {title && (
        <p css={pageTemplate.contentTitle}>
          {title}
          {'required' in form.option && <span css={pageTemplate.require}>*必須</span>}
        </p>
      )}
      {children}
      <span css={pageTemplate.unit}>{unit}</span>
      <ErrorMessage errors={errors} form={form} />
    </div>
  );
};

const InputForm: VFC<InputFormProps | TextAreaFormProps> = ({ options, title, placeholder, form, unit, ...props }) => {
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
          <input {...options} type={typeAttr} {...(form && { ...register(form.name, form.option) })} onChange={(e) => setState && setState(e.target.value)} css={inputStyle.input()} placeholder={placeholder} />
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

export default InputForm;
