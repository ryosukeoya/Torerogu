import React from 'react';
import type { FC, ReactNode } from 'react';
import { Input, Snackbar } from '../entryPoints';
import { templates } from '../../styles/template';
import { simpleButton } from '../styleEntryPoints';
import type { SubmitHandler, UseFormHandleSubmit } from 'react-hook-form';

type ContainerInterface = {
  handleSubmit: UseFormHandleSubmit<any>;
  submitFunc: SubmitHandler<any>;
  title: string;
  open: boolean;
  handleClose: () => void;
  OtherElm?: JSX.Element;
  children: ReactNode;
};

const FormContainer: FC<ContainerInterface> = ({ handleSubmit, submitFunc, title, open, handleClose, OtherElm, children }) => {
  return (
    <form onSubmit={handleSubmit(submitFunc)}>
      <div css={templates.contentArea}>
        <h2 css={templates.title}>{title}</h2>
        {children}
        <Input type={'isInput'} typeAttr='submit' customCss={simpleButton(10)} value={'記録する'} />
        <Snackbar text={'記録しました！'} open={open} handleClose={handleClose} />
        {OtherElm}
      </div>
    </form>
  );
};

export default FormContainer;
