import { graphql } from 'msw';
import { trainingTrainingType } from '../datum/graphql/getTrainingTrainingType';
import { GetTrainingTrainingTypeDocument } from '~/libs/graphql/generated/graphql';

/**
 * どのリクエストに対して、どのようなレスポンスを返すか
 */
export const handlers = [
  graphql.query(GetTrainingTrainingTypeDocument, (req, res, ctx) => {
    return res(
      ctx.data({
        __typename: 'query_root',
        trainings: [trainingTrainingType, { ...trainingTrainingType, id: 2, training_type_id: 10, training_type: { id: 10, name: 'サイドレイズ' } }, { ...trainingTrainingType, id: 3, is_finish: true, training_weight: 100 }],
      }),
    );
  }),
];
