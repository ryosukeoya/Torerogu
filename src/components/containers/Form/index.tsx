import React from 'react';
import type { FC, ReactNode } from 'react';
import { InputPart, Snackbar } from '~/components';
import { pageTemplate } from '~/styles/share/pageTemplate';
import type { SubmitHandler, UseFormHandleSubmit } from 'react-hook-form';

type ContainerInterface = {
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

const FormContainer: FC<ContainerInterface> = ({ pageIndex, handleSubmit, submitFunc, title, open, handleClose, firstElm, lastElm, children }) => {
  return (
    <form onSubmit={handleSubmit(submitFunc)}>
      <div css={pageTemplate.contentArea}>
        {firstElm}
        <h2 css={pageTemplate.title}>{title}</h2>
        {children}
        <InputPart type={'isSubmit'} />
        <Snackbar pageIndex={pageIndex} text={'記録しました！'} open={open} handleClose={handleClose} />
        {lastElm}
      </div>
    </form>
  );
};

export default FormContainer;
