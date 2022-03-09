import type { NextPage } from 'next';
import React, { VFC } from 'react';
import { headerTabIndexAtom } from '../../store';
import { useRecoilValue } from 'recoil';
import { useQuery } from '@apollo/client';
import { GET_RECORD_PAGE_PROPS } from '../../libs/graphql/queries/record';
import { GetRecordPagePropsQuery } from '../../types/generated/graphql';
import BodyInfoPage from './BodyInfoPage';
import TrainingPage from './TrainingPage';

const Plan: NextPage<VFC> = () => {
  const activeIndex = useRecoilValue(headerTabIndexAtom);

  const { data, error, loading } = useQuery<GetRecordPagePropsQuery>(GET_RECORD_PAGE_PROPS);

  if (activeIndex === 0) {
    return <BodyInfoPage />;
  } else if (activeIndex === 1) {
    return <TrainingPage />;
  } else {
    return null;
  }
};

export default Plan;
