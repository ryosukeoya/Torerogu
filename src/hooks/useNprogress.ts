import { useEffect } from 'react';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

type Config = {
  SHOWSPINNER: boolean;
  SPEED: number;
  MINIMUM: number;
};

const CONFIG: Config = {
  SHOWSPINNER: false,
  SPEED: 230,
  MINIMUM: 0.08,
};

export const useNprogress = () => {
  NProgress.configure({ showSpinner: CONFIG.SHOWSPINNER, speed: CONFIG.SPEED, minimum: CONFIG.MINIMUM });

  if (process.browser) {
    NProgress.start();
  }

  useEffect(() => {
    NProgress.done();
  });
};
