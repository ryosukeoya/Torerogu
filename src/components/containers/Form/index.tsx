import React from 'react';
import type { FC, ReactNode } from 'react';
import { Input, Snackbar } from '~/components/entryPoint';
import { pageTemplate } from '~/styles/share/pageTemplate';
import type { SubmitHandler, UseFormHandleSubmit } from 'react-hook-form';
import { COLOR } from '~/styles/const';
import { css } from '@emotion/react';

type ContainerInterface = {
  pageIndex: number;
  handleSubmit: UseFormHandleSubmit<Record<string, unknown>>;
  submitFunc: SubmitHandler<any>; // eslint-disable-line @typescript-eslint/no-explicit-any
  title: string;
  open: boolean;
  handleClose: () => void;
  OtherElm?: JSX.Element;
  children: ReactNode;
};

const FormContainer: FC<ContainerInterface> = ({ pageIndex, handleSubmit, submitFunc, title, open, handleClose, OtherElm, children }) => {
  return (
    <form onSubmit={handleSubmit(submitFunc)}>
      <div css={pageTemplate.contentArea}>
        <h2 css={pageTemplate.title}>{title}</h2>
        {children}
        <Input
          type={'isSubmit'}
          customCss={css`
            background: ${COLOR.ORANGE};
            border: none;
            color: white;
          `}
        />
        <Snackbar pageIndex={pageIndex} text={'記録しました！'} open={open} handleClose={handleClose} />
        {OtherElm}
      </div>
    </form>
  );
};

export default FormContainer;
