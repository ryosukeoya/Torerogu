import { GetTrainingTrainingTypeQuery, GetTrainingTrainingTypeDocument } from '~/libs/graphql/generated/graphql';

export const trainingTrainingType = (date: string): GetTrainingTrainingTypeQuery['trainings'] => {
  return [
    {
      __typename: 'trainings',
      id: 1,
      user_id: '012345',
      training_type_id: 1,
      training_weight: 60,
      training_count: 10,
      training_set: 5,
      is_finish: true,
      date: date,
      training_type: {
        __typename: 'training_types',
        id: 1,
        name: 'ベンチプレス',
      },
    },
  ];
};

export const getTrainingTrainingType = (trainingTrainingType: GetTrainingTrainingTypeQuery['trainings']) => {
  return {
    request: {
      query: GetTrainingTrainingTypeDocument,
    },
    // 正常系
    result: {
      data: {
        __typename: 'query_root',
        trainings: trainingTrainingType,
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
