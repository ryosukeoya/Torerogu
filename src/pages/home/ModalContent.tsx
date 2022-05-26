import type { VFC, SetStateAction, Dispatch } from 'react';
import { getDataSpecifiedDate, getDateInfo } from '~/utils';
import { css } from '@emotion/react';
import { FONT, COLOR } from '~/styles/const';
import { clearFix } from '~/styles/shares/app';
import type { TrainingTrainingType, ScheduleCategories } from './types';
import { DeleteTrainingDocument, DeleteTrainingMutation, GetTrainingTrainingTypeQuery } from '~/libs/graphql/generated/graphql';
import { useMutation } from '@apollo/client';

type Trainings = Omit<GetTrainingTrainingTypeQuery, '__typename'>['trainings'];

type Props = {
  selectedDate: Date | undefined;
  extractedTrainings: TrainingTrainingType;
  trainings: TrainingTrainingType;
  setTrainings: Dispatch<SetStateAction<TrainingTrainingType>>;
  category: ScheduleCategories;
};

const ModalContent: VFC<Props> = ({ selectedDate, extractedTrainings, trainings, setTrainings, category }) => {
  const date = selectedDate && getDateInfo(selectedDate);
  const [deleteTraining] = useMutation<DeleteTrainingMutation>(DeleteTrainingDocument, {
    // onCompleted: () => console.log('deleted'),
  });

  const handleClick = (trainings: TrainingTrainingType, pk: number) => {
    deleteTraining({ variables: { id: pk } });

    const filteredTraining = trainings?.filter((training) => training.id !== pk);
    setTrainings(filteredTraining);
  };

  return (
    <>
      <h1 css={styles.title}>✏️ {`${date?.year}年${date?.month}月${date?.day}日${category !== 'ALL' ? category : ''}`}のトレーニング</h1>
      <ul>
        {selectedDate && extractedTrainings && getDataSpecifiedDate<Trainings>(extractedTrainings, selectedDate).length === 0 ? (
          <p>※ 本日のトレーニングはありません</p>
        ) : (
          selectedDate &&
          extractedTrainings &&
          getDataSpecifiedDate<Trainings>(extractedTrainings, selectedDate)?.map((extractedTraining) => {
            return (
              <li key={extractedTraining.id} css={styles.item}>
                <div css={styles.leftSide}>
                  <p css={styles.trainingName}>{extractedTraining.training_type.name}</p>
                  <button onClick={() => handleClick(trainings, extractedTraining.id)} css={styles.deleteButton}>
                    削除
                  </button>
                  <p css={styles.trainingDetail}>
                    ・{extractedTraining.training_weight}kg × {extractedTraining.training_count}回、{extractedTraining.training_set}セット
                  </p>
                </div>
              </li>
            );
          })
        )}
      </ul>
    </>
  );
};

export default ModalContent;

const styles = {
  title: css`
    font-size: ${FONT.X1_LARGE};
    padding-bottom: 20px;
  `,
  item: css`
    padding-bottom: 20px;
    ${clearFix}
  `,
  leftSide: css`
    //
  `,
  trainingName: css`
    display: inline-block;
    font-size: ${FONT.LARGE};
    padding-bottom: 8px;
  `,
  trainingDetail: css`
    //
  `,
  deleteButton: css`
    float: right;
    margin-top: 2.6px;
    padding: 7px 12px;
    border-radius: 10px;
    background-color: ${COLOR.RED}B3;
    border: none;
    color: white;
    font-size: ${FONT.SMALL};
    cursor: pointer;
  `,
};
