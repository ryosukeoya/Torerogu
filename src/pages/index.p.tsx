import type { NextPage } from 'next';
import { GET_TRAINING_ONE_TYPE } from '../libs/graphql/queries';
import type { GetTrainingOneTypeQuery } from '../types/generated/graphql';
import { useQuery } from '@apollo/client';
import { pageTemplate } from '../styles/share/pageTemplate';
import { getCurrentDate } from '../utils/app';
import Top from './Top';
import History from './History';
import { SwiperWrapper, PrimaryNavigationLocalState } from '~/components';
import { BREAKPOINT } from '~/styles/const';
import { useGetTabTitle } from '~/hooks';
import { css } from '@emotion/react';

const Home: NextPage = () => {
  const { data, error, loading } = useQuery<GetTrainingOneTypeQuery>(GET_TRAINING_ONE_TYPE, {
    variables: { date: getCurrentDate(new Date(), false) },
    fetchPolicy: 'network-only',
  });
  const tabNames = useGetTabTitle();

  if (loading) {
    return (
      <div css={pageTemplate.contentArea}>
        <p>Loading...</p>
      </div>
    );
  }
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <PrimaryNavigationLocalState
        titles={tabNames}
        theme='basicTab'
        options={{ isSwiper: true, isToggle: true }}
        customCss={{
          item: css`
            width: 100%;
            @media (max-width: ${BREAKPOINT.MD - 1}px) {
              display: none;
            }
          `,
        }}
      />
      <SwiperWrapper>
        <Top data={data} />
        <History />
      </SwiperWrapper>
    </>
  );
};

export default Home;
