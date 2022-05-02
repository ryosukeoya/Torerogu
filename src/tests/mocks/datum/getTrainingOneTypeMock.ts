// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { GraphQLError } from 'graphql';
import { GetTrainingOneTypeDocument, GetTrainingOneTypeQuery } from '~/libs/graphql/generated/graphql';
import { getStringTypeDate } from '~/utils/app';

export const getTrainingOneTypeMock = (trainings: GetTrainingOneTypeQuery['trainings']) => {
  return {
    request: {
      query: GetTrainingOneTypeDocument,
      variables: {
        date: getStringTypeDate(new Date()),
      },
    },
    // 正常系
    result: {
      data: {
        __typename: 'query_root',
        trainings: trainings,
      },
    },

    // GraphQL Error
    // result: {
    //   errors: [new GraphQLError('Error!')],
    // },

    //ネットワークエラー
    // error: new Error('An error occurrd'),
  };
};
