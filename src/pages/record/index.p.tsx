import type { NextPage } from 'next';
import { GetTrainingCategoryWithTypeDocument, GetTrainingCategoryWithTypeQuery } from '~/libs/graphql/generated/graphql';
import BodyInfoPage from './BodyInfoPage';
import TrainingPage from './TrainingPage';
import { initializeApollo } from '~/libs/graphql/apolloClient';
import { SliderWrapper } from '~/components';
import { useGetElementWidth } from '~/hooks';
import { PageLayout } from '~/layouts';
import { useQuery } from '@apollo/client';

// TODO
// export async function getStaticProps() {
//   const apolloClient = initializeApollo(undefined, process.env.ACCESS_TOKEN);

//   const data = await apolloClient.query({
//     query: GetTrainingCategoryWithTypeDocument,
//   });

//   return {
//     props: data,
//   };
// }

type Props = {
  data?: GetTrainingCategoryWithTypeQuery;
};

const Record: NextPage<Props> = () => {
  const { data } = useQuery<GetTrainingCategoryWithTypeQuery>(GetTrainingCategoryWithTypeDocument, {
    fetchPolicy: 'cache-first',
  });
  const [ref, mainContentWidth] = useGetElementWidth<HTMLDivElement>();

  return (
    <div ref={ref}>
      <PageLayout mainContentWidth={mainContentWidth}>
        <SliderWrapper>
          <BodyInfoPage pageIndex={0} />
          <TrainingPage data={data} pageIndex={1} />
        </SliderWrapper>
      </PageLayout>
    </div>
  );
};

export default Record;
