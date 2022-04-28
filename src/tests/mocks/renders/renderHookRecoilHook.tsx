import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { RecoilRoot } from 'recoil';

export const renderHookRecoilHook = <P, R>(callback: (props: P) => R) => {
  return renderHook(callback, {
    wrapper: ({ children }) => <RecoilRoot>{children}</RecoilRoot>,
  });
};
