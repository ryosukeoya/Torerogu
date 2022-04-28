import { graphql } from 'msw';
import { GetTrainingOneTypeDocument } from '~/libs/graphql/generated/graphql';

export const getTrainingOneTypeDefaultResponse = {
  __typename: 'trainings',
  id: 1,
  user_id: 1,
  training_type_id: 1,
  training_weight: 60,
  training_count: 10,
  training_set: 10,
  is_finish: true,
  date: '2022-04-26',
  training_type: {
    __typename: 'training_types',
    id: 1,
    name: 'ベンチプレス',
  },
};

export const handlers = [
  graphql.query(GetTrainingOneTypeDocument, (req, res, ctx) => {
    return res(
      ctx.data({
        __typename: 'query_root',
        trainings: [{ ...getTrainingOneTypeDefaultResponse }, { ...getTrainingOneTypeDefaultResponse, is_finish: true }],
      }),
    );
  }),
];
