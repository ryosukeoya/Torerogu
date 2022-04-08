import React from 'react';
import type { ReactNode } from 'react';
import { InputField, Snackbar } from '~/components';
import { pageTemplate } from '~/styles/emotion/pageTemplate';
import type { FieldValues, SubmitHandler } from 'react-hook-form';
import { useForm, FormProvider } from 'react-hook-form';

type Props<T extends FieldValues> = {
  pageIndex: number;
  submitFunc: SubmitHandler<T>;
  title: string;
  open: boolean;
  handleClose: () => void;
  firstElm?: JSX.Element;
  lastElm?: JSX.Element;
  children: ReactNode;
};

const FormContainer = <T,>(props: Props<T>) => {
  const { pageIndex, submitFunc, title, open, handleClose, firstElm, lastElm, children } = props;

  const method = useForm<T>();
  const { handleSubmit } = method;

  return (
    <FormProvider {...method}>
      <form onSubmit={handleSubmit(submitFunc)}>
        <div css={pageTemplate.contentArea}>
          {firstElm}
          <h2 css={pageTemplate.title}>{title}</h2>
          {children}
          <InputField type='submit' value='' />
          <Snackbar pageIndex={pageIndex} text={'記録しました！'} open={open} handleClose={handleClose} />
          {lastElm}
        </div>
      </form>
    </FormProvider>
  );
};

export default FormContainer;