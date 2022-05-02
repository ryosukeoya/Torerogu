// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { GraphQLError } from 'graphql';
import { GetTrainingWithBodyInfoDocument } from '~/libs/graphql/generated/graphql';

export const GetTrainingWithBodyMock = {
  request: {
    query: GetTrainingWithBodyInfoDocument,
    variables: {},
  },
  // 正常系
  result: {
    data: {
      __typename: 'query_root',
      trainings: [
        {
          __typename: 'trainings',
          id: 1,
          user_id: 1,
          training_type_id: 1,
          training_weight: 60,
          training_count: 10,
          training_set: 10,
          is_finish: false,
          date: '2022-04-30',
          training_type: {
            __typename: 'training_types',
            id: 1,
            name: 'ベンチプレス',
          },
        },
      ],
      body_info_data_histories: [
        {
          id: 1,
          user_id: 1,
          weight: 60,
          date: '2022-05-01',
          is_record: true,
        },
      ],
    },
    // trainings(order_by: {id: asc}) {
    //     id
    //     user_id
    //     training_type_id
    //     training_weight
    //     training_count
    //     training_set
    //     is_finish
    //     date
    //   }
    //  body_info_data_histories(order_by: {id: asc}) {
    //     id
    //     user_id
    //     weight
    //     date
    //     is_record
    //   }
  },
};
