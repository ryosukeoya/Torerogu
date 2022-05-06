import { CreateBodyInfoHistoriesDocument } from '~/libs/graphql/generated/graphql';
import { getStringTypeDate } from '~/utils/app';

export const createBodyInfoHistories = {
  request: {
    query: CreateBodyInfoHistoriesDocument,
    variables: {
      height: null,
      weight: 55,
      body_fat_percentage: null,
      date: getStringTypeDate(new Date()),
      user_id: 1,
      is_record: true,
    },
  },
  // 正常系
  result: {
    data: {
      __typename: 'mutation_root',
      insert_body_info_data_histories_one: {
        id: 1,
      },
    },
  },

  // GraphQL Error
  // result: {
  //   errors: [new GraphQLError('Error!')],
  // },

  //ネットワークエラー
  // error: new Error('An error occurrd'),
};
