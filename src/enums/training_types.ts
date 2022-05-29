const KINDS = {
  // セット数と回数と重量の全て持つ
  ALL_STATUS: 0,
  // セット数と回数と重量の全てを持たない
  NOT_ALL_STATUS: 1,
  // 回数のみを持つ
  COUNT_ONLY: 2,
} as const;

export type TrainingTypeKinds = typeof KINDS[keyof typeof KINDS];

export const TRAINING_TYPE = {
  KINDS,
} as const;

/*
Examples
ALL: ベンチプレスなど
NOT_ALL:ランニングなど
COUNT_ONLY: 腕たせ伏せなど
*/