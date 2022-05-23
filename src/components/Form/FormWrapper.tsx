import React, { VFC, ReactNode } from 'react';
import { InputField, Snackbar } from '~/components';
import { pageTemplate } from '~/styles/shares/pageTemplate';
import type { SubmitHandler, UseFormHandleSubmit } from 'react-hook-form';

type Props = {
  pageIndex: number;
  handleSubmit: UseFormHandleSubmit<Record<string, unknown>>;
  submitFunc: SubmitHandler<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
  title: string;
  open: boolean;
  handleClose: () => void;
  firstElm?: JSX.Element;
  lastElm?: JSX.Element;
  children: ReactNode;
};

export const FormWrapper: VFC<Props> = ({ pageIndex, handleSubmit, submitFunc, title, open, handleClose, firstElm, lastElm, children }) => {
  return (
    <form onSubmit={handleSubmit(submitFunc)}>
      <div css={pageTemplate.contentArea}>
        {firstElm}
        <h2 css={pageTemplate.title}>{title}</h2>
        {children}
        <InputField type='submit' value='' data-testid='submit' />
        <Snackbar pageIndex={pageIndex} text={'記録しました！'} open={open} handleClose={handleClose} />
        {lastElm}
      </div>
    </form>
  );
};
