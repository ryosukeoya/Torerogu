// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { GraphQLError } from 'graphql';
import { GetTrainingOneTypeDocument, GetTrainingOneTypeQuery } from '~/libs/graphql/generated/graphql';
import { getStringTypeDate } from '~/utils/app';

type TrainingOneType = Array<GetTrainingOneTypeQuery['trainings'][number]>;

export const trainingOneType: TrainingOneType = [
  {
    __typename: 'trainings',
    id: 1,
    user_id: '012345',
    training_type_id: 1,
    training_weight: 60,
    training_count: 10,
    training_set: 10,
    is_finish: false,
    date: getStringTypeDate(new Date()),
    training_type: {
      __typename: 'training_types',
      id: 1,
      name: 'ベンチプレス',
    },
  },
  {
    __typename: 'trainings',
    id: 2,
    user_id: '012345',
    training_type_id: 10,
    training_weight: 30,
    training_count: 10,
    training_set: 15,
    is_finish: false,
    date: getStringTypeDate(new Date()),
    training_type: {
      __typename: 'training_types',
      id: 10,
      name: 'サイドレイズ',
    },
  },
];

export const getTrainingOneTypeMock = (trainingOneType: TrainingOneType) => {
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
        trainings: trainingOneType,
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
