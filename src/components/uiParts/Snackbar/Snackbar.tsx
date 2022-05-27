/* eslint-disable consistent-default-export-name/default-export-match-filename */
import React, { forwardRef, VFC } from 'react';
import Snackbar from '@mui/material/Snackbar';
// eslint-disable-next-line consistent-default-export-name/default-import-match-filename
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { Portal } from '../../Portal';

type Props = {
  text: string;
  open: boolean;
  handleClose: () => void;
  pageIndex: number;
};

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

export const SnackbarWrap: VFC<Props> = ({ text, open, handleClose }) => {
  return (
    <Portal>
      <Snackbar open={open} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} autoHideDuration={2000} onClose={handleClose} sx={{ width: '100%', maxWidth: '400px', bottom: '67px' }}>
        <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
          {text}
        </Alert>
      </Snackbar>
    </Portal>
  );
};
