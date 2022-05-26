import { graphql } from 'msw';
import { getStringTypeDate } from '~/utils';
import { GetTrainingOneTypeDocument } from '~/libs/graphql/generated/graphql';

export const getTrainingOneTypeDefaultResponse = {
  __typename: 'trainings',
  id: 1,
  user_id: 1,
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
};

/**
 * どのリクエストに対して、どのようなレスポンスを返すか
 */
export const handlers = [
  graphql.query(GetTrainingOneTypeDocument, (req, res, ctx) => {
    return res(
      ctx.data({
        __typename: 'query_root',
        trainings: [getTrainingOneTypeDefaultResponse, { ...getTrainingOneTypeDefaultResponse, id: 2, training_type_id: 10, training_type: { id: 10, name: 'サイドレイズ' } }, { ...getTrainingOneTypeDefaultResponse, id: 3, is_finish: true, training_weight: 100 }],
      }),
    );
  }),
];
