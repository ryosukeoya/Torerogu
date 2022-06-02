import React, { VFC } from 'react';
import { Carousel, CardWrapper } from '~/components';
import { GetTrainingCategoryWithTypeQuery } from '~/libs/graphql/generated/graphql';
import { getTrainingTypesFromCategoryIndex } from '~/utils';
import { pageTemplate } from '~/styles/shares/pageTemplate';
import { SetterOrUpdater } from 'recoil';
import { css } from '@emotion/react';
import type { TrainingType } from './types';

type Props = {
  data?: GetTrainingCategoryWithTypeQuery;
  handleClick: (data: Readonly<TrainingType>) => void;
  selectedCategoryIndex: number;
  setSelectedCategoryIndex: SetterOrUpdater<number>;
};

const TrainingSelectionPage: VFC<Props> = ({ data, handleClick, selectedCategoryIndex, setSelectedCategoryIndex }) => {
  return (
    <div css={pageTemplate.contentArea}>
      {data?.training_categories && <Carousel items={data?.training_categories} initialIndex={selectedCategoryIndex} setState={setSelectedCategoryIndex} />}
      {getTrainingTypesFromCategoryIndex(selectedCategoryIndex, data?.training_types, data?.training_categories)?.map((training_type) => {
        return (
          <CardWrapper
            handleClick={() => handleClick(training_type)}
            key={training_type.id}
            customCardCss={css`
              margin-bottom: 15px;
            `}
          >
            {training_type.name}
          </CardWrapper>
        );
      })}
    </div>
  );
};

export default TrainingSelectionPage;
