import { CreateBodyInfoHistoriesDocument, CreateBodyInfoHistoriesMutationVariables } from '~/libs/graphql/generated/graphql';
import { getStringTypeDate } from '~/utils';

export const planPageVariables = {
  height: null,
  weight: 55,
  body_fat_percentage: null,
  date: getStringTypeDate(new Date(), 'YYYY-MM-DD'),
  is_record: false,
};

export const requiredRecordPageVariables = {
  height: null,
  weight: 55,
  body_fat_percentage: null,
  date: getStringTypeDate(new Date()),
  is_record: true,
};

export const allRecordPageVariables = {
  height: null,
  weight: 55,
  body_fat_percentage: 20,
  date: getStringTypeDate(new Date()),
  is_record: true,
};

export const createBodyInfoHistories = (variables: CreateBodyInfoHistoriesMutationVariables) => {
  return {
    request: {
      query: CreateBodyInfoHistoriesDocument,
      variables: variables,
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
};
