import React from 'react';
import type { VFC } from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

type Props = {
  open: boolean;
  handleClose: () => void;
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const SnackbarAlert: VFC<Props> = ({ open, handleClose }) => {
  return (
    <Snackbar open={open} anchorOrigin={{ vertical: 'top', horizontal: 'center' }} autoHideDuration={3000} onClose={handleClose}>
      <Alert onClose={handleClose} severity='success' sx={{ width: '100%' }}>
        記録しました！
      </Alert>
    </Snackbar>
  );
};

export default SnackbarAlert;
