import { GetTrainingCategoryWithTypeQuery } from '~/libs/graphql/generated/graphql';

export type TrainingFormValues = {
  trainingWeight: number;
  set: number;
  count: number;
};

export type TrainingType = Omit<GetTrainingCategoryWithTypeQuery['training_types'][number], '__typename'>;
