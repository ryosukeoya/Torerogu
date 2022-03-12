import React from 'react';
import type { FC, ReactNode } from 'react';
import { Input, Snackbar } from '../entryPoints';
import { templates } from '../../styles/template';
import { simpleButton } from '../styleEntryPoints';

type ContainerInterface = {
  title: string;
  open: boolean;
  handleClose: () => void;
  children: ReactNode;
};

const FormContainer: FC<ContainerInterface> = ({ title, open, handleClose, children }) => {
  return (
    <>
      <div css={templates.contentArea}>
        <h2 css={templates.title}>{title}</h2>
        {children}
      </div>
      <Input type={'isInput'} typeAttr='submit' customCss={simpleButton(10)} value={'記録する'} />
      <Snackbar text={'記録しました！'} open={open} handleClose={handleClose} />
    </>
  );
};

export default FormContainer;
