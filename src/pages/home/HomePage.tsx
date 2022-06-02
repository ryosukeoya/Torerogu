import React, { VFC } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { pageTemplate } from '~/styles/shares/pageTemplate';
import { CheckboxMU } from '~/components';
import { useMutation } from '@apollo/client';
import { UpdateTrainingIsFinishDocument, GetTrainingTrainingTypeQuery, UpdateTrainingIsFinishMutation, UpdateTrainingIsFinishMutationVariables } from '~/libs/graphql/generated/graphql';
import { getDataSpecifiedDate } from '~/utils';
import { SetterOrUpdater } from 'recoil';

type Props = {
  trainings?: GetTrainingTrainingTypeQuery['trainings'];
  setTrainings: SetterOrUpdater<GetTrainingTrainingTypeQuery['trainings'] | undefined>;
};

const HomePage: VFC<Props> = ({ trainings, setTrainings }) => {
  const [updateTraining, {}] = useMutation<UpdateTrainingIsFinishMutation>(UpdateTrainingIsFinishDocument);

  const onClickCheckbox = (isChecked: boolean, training: GetTrainingTrainingTypeQuery['trainings'][number]) => {
    setTrainings((prevTrainings: GetTrainingTrainingTypeQuery['trainings'] | undefined) => prevTrainings?.map((prevTraining) => (prevTraining.id === training.id ? { ...prevTraining, ...{ is_finish: !isChecked } } : prevTraining)));
    updateTraining({
      variables: {
        id: training.id,
        is_finish: !isChecked,
      } as UpdateTrainingIsFinishMutationVariables,
    });
  };

  return (
    <div css={pageTemplate.contentArea}>
      <h2 css={pageTemplate.title}>✏️ 本日のトレーニング</h2>
      {trainings &&
        getDataSpecifiedDate(trainings, new Date()).map((training) => {
          return (
            <div key={training.id}>
              <Accordion sx={{ marginBottom: '5px' }}>
                <AccordionSummary expandIcon={<ExpandMore />} aria-controls='panel1a-content' id='panel1a-header'>
                  <Typography>
                    <CheckboxMU<GetTrainingTrainingTypeQuery['trainings'][number]> initIsChecked={training.is_finish} data={training} handleClick={onClickCheckbox} />
                    <span>{training.training_type.name}</span>
                  </Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ backgroundColor: '#fcfcfc', borderTop: '1px solid #e3e3e3' }}>
                  <Typography>{training.training_set}セット</Typography>
                  <Typography>{training.training_count}回</Typography>
                  <Typography>{training.training_weight}kg</Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}
      {trainings?.length === 0 && <p role='no-data'>※ 本日予定のトレーニングはありません</p>}
    </div>
  );
};

export default HomePage;
