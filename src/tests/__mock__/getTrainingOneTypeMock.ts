import { GetTrainingOneTypeDocument } from '~/libs/graphql/generated/graphql';
import { getStringTypeDate } from '~/utils/app';

export const getTrainingOneTypeMock = {
  request: {
    query: GetTrainingOneTypeDocument,
    variables: {
      date: getStringTypeDate(new Date()),
    },
  },
  result: {
    data: {
      search: {
        edges: [
          {
            cursor: 'Y3Vyc29yOjE=',
            node: { name: 'apollo-storybook-decorator' },
          },
        ],
        pageInfo: {
          endCursor: 'Y3Vyc29yOjU=',
          hasNextPage: true,
          hasPreviousPage: false,
          startCursor: 'Y3Vyc29yOjE=',
        },
        repositoryCount: 411,
      },
    },
  },
};
