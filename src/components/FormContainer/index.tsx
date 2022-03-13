import React from 'react';
import type { FC, ReactNode } from 'react';
import { Input, Snackbar } from '../entryPoints';
import { templates } from '../../styles/template';
import { simpleButton } from '../styleEntryPoints';

type ContainerInterface = {
  title: string;
  open: boolean;
  handleClose: () => void;
  OtherElm?: JSX.Element;
  children: ReactNode;
};

const FormContainer: FC<ContainerInterface> = ({ title, open, handleClose, OtherElm, children }) => {
  return (
    <>
      <div css={templates.contentArea}>
        <h2 css={templates.title}>{title}</h2>
        {children}
      <Input type={'isInput'} typeAttr='submit' customCss={simpleButton(10)} value={'記録する'} />
      <Snackbar text={'記録しました！'} open={open} handleClose={handleClose} />
      {OtherElm}
      </div>
    </>
  );
};

export default FormContainer;
