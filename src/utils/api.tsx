//API関連の共通したい関数とかを配置
import type { GetTrainingCategoryWithTypeQuery } from '../types/generated/graphql';

type TrainingCategory = GetTrainingCategoryWithTypeQuery['training_categories'];
type TrainingTypes = GetTrainingCategoryWithTypeQuery['training_types'];
type TrainingType = Omit<GetTrainingCategoryWithTypeQuery['training_types'][number], '__typename'>;

export const getTrainingTypes = (setSelectedCategoryIndex: number, training_types?: TrainingTypes, training_categories?: TrainingCategory): Readonly<TrainingType>[] | undefined => {
  const slectedTrainingTypes = training_types?.filter(function (training_type) {
    return training_type.training_category_id === training_categories?.[setSelectedCategoryIndex].id;
  });
  return slectedTrainingTypes;
};
