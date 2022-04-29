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
      __typename: 'trainings',
      id: 1,
      user_id: 1,
      training_type_id: 1,
      training_weight: 60,
      training_count: 10,
      training_set: 10,
      is_finish: false,
      date: '2022-04-26',
      training_type: {
        __typename: 'training_types',
        id: 1,
        name: 'ベンチプレス',
      },
    },
  },
};
