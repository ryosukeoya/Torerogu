import type { NextPage } from 'next';
import { GetTrainingCategoryWithTypeDocument, GetTrainingCategoryWithTypeQuery } from '~/libs/graphql/generated/graphql';
import BodyInfoPage from './BodyInfoPage';
import TrainingPage from './TrainingPage';
import { initializeApollo } from '~/libs/graphql/apolloClient';
import { SwiperWrapper } from '~/components';
import { useGetElementWidth } from '~/hooks';
import { PageLayout } from '~/layout';
import { Auth0AuthorizationHandler } from '~/components/Auth0AuthorizationHandler';

export async function getStaticProps() {
  const apolloClient = initializeApollo(undefined, process.env.ACCESS_TOKEN);

  const data = await apolloClient.query({
    query: GetTrainingCategoryWithTypeDocument,
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

  return (
    <Auth0AuthorizationHandler>
      <PageLayout mainContentWidth={mainContentWidth}>
        <SwiperWrapper elm={elm}>
          <BodyInfoPage pageIndex={0} />
          <TrainingPage data={data} pageIndex={1} />
        </SwiperWrapper>
      </PageLayout>
    </Auth0AuthorizationHandler>
  );
};

export default Record;
