/* eslint-disable consistent-default-export-name/default-export-match-filename */
import React, { forwardRef } from 'react';
import type { VFC } from 'react';
import Snackbar from '@mui/material/Snackbar';
// eslint-disable-next-line consistent-default-export-name/default-import-match-filename
import MuiAlert, { AlertProps } from '@mui/material/Alert';

type Props = {
  text: string;
  open: boolean;
  handleClose: () => void;
  pageIndex: number;
};

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const SnackbarWrap: VFC<Props> = ({ text, open, handleClose }) => {
  return (
    <Snackbar open={open} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
        {text}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarWrap;
