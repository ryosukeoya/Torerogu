import type { NextPage } from 'next';
import React, { VFC } from 'react';
import { headerTabIndexAtom } from '../../store';
import { useRecoilValue } from 'recoil';
import BodyInfoPage from './BodyInfoPage';
import TrainingPage from './TrainingPage';

const Plan: NextPage<VFC> = () => {
  const activeIndex = useRecoilValue(headerTabIndexAtom);

  if (activeIndex === 0) {
    return <BodyInfoPage />;
  } else if (activeIndex === 1) {
    return <TrainingPage />;
  } else {
    return null;
  }
};

export default Plan;
