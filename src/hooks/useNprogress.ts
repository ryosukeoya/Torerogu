import { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { NPROGRESS } from '../constants/nprogress';

export const useNprogress = () => {
  NProgress.configure({ showSpinner: NPROGRESS.SHOWSPINNER, speed: NPROGRESS.SPEED, minimum: NPROGRESS.MINIMUM });
  
  if (process.browser) {
    NProgress.start();
  }

  useEffect(() => {
    NProgress.done();
  });
};