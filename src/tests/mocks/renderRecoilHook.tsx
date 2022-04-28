//https:scrapbox.io/mrsekut-p/Recoil%E3%81%AE%E3%83%86%E3%82%B9%E3%83%88
import { renderHook } from '@testing-library/react-hooks';
import React from 'react';
import { RecoilRoot } from 'recoil';

export const renderRecoilHook = <P, R>(callback: (props: P) => R) => {
  return renderHook(callback, {
    wrapper: ({ children }) => <RecoilRoot>{children}</RecoilRoot>,
  });
};
