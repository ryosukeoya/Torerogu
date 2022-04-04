import React, { forwardRef } from 'react';
import type { VFC } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { getCustomCss } from './func';

type Props = {
  text: string;
  open: boolean;
  handleClose: () => void;
  pageIndex: number;
};

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const SnackbarWrap: VFC<Props> = ({ text, open, handleClose, pageIndex }) => {
  return (
    <Snackbar open={open} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} autoHideDuration={3000} onClose={handleClose} sx={() => getCustomCss(pageIndex)}>
      <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
        {text}
      </Alert>
    </Snackbar>
  );
};

export default SnackbarWrap;
