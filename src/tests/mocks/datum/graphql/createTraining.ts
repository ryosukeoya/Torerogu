import { CreateBodyInfoHistoriesDocument, CreateTrainingMutationVariables } from '~/libs/graphql/generated/graphql';
import { getStringTypeDate } from '~/utils';

// export const planPageVariables = {
//   height: null,
//   weight: 55,
//   body_fat_percentage: null,
//   date: getStringTypeDate(new Date(), 'YYYY-MM-DD'),
//   user_id: 1,
//   is_record: false,
// };

export const requiredRecordPageVariables = {
  training_type_id: 4,
  training_weight: 60,
  training_count: 20,
  training_set: 10,
  is_finish: true,
  date: getStringTypeDate(new Date()),
};

export const createTraining = (variables: CreateTrainingMutationVariables) => {
  return {
    request: {
      query: CreateBodyInfoHistoriesDocument,
      variables: variables,
    },
    // 正常系
    result: {
      data: {
        __typename: 'mutation_root',
        insert_trainings_one: {
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
