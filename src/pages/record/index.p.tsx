import type { NextPage } from 'next';
import { GET_TRAINING_CATEGORY_WITH_TYPE } from '~/libs/graphql/queries';
import type { GetTrainingCategoryWithTypeQuery } from '~/types/generated/graphql';
import BodyInfoPage from './BodyInfoPage';
import TrainingPage from './TrainingPage';
import { initializeApollo } from '~/libs/graphql/apolloClient';
import { SwiperWrapper, PrimaryNavigationGlobalState } from '~/components';
import { BREAKPOINT } from '~/styles/const';
import { useGetElementWidth, useGetTabTitleFromRoute } from '~/hooks';
import { css } from '@emotion/react';

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  const data = await apolloClient.query({
    query: GET_TRAINING_CATEGORY_WITH_TYPE,
  });

  return {
    props: data,
  };
}

type Props = {
  data?: GetTrainingCategoryWithTypeQuery;
};

const Record: NextPage<Props> = ({ data }) => {
  const [elm, mainContentWidth] = useGetElementWidth<HTMLDivElement>();
  const tabNames = useGetTabTitleFromRoute();

  return (
    <>
      <PrimaryNavigationGlobalState
        titles={tabNames}
        theme='basicTab'
        options={{ isSwiper: true, isToggle: true }}
        width={mainContentWidth}
        customCss={{
          item: css`
            width: 100%;

            @media (max-width: ${BREAKPOINT.MD - 1}px) {
              display: none;
            }
          `,
        }}
      />
      <SwiperWrapper elm={elm}>
        <BodyInfoPage pageIndex={0} />
        <TrainingPage data={data} pageIndex={1} />
      </SwiperWrapper>
    </>
  );
};

export default Record;
