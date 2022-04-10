import React from 'react';
import type { VFC } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { pageTemplate } from '../styles/shares/pageTemplate';
import type { GetTrainingOneTypeQuery } from '../types/generated/graphql';
import { CheckboxMU } from '~/components';
import { UPDATE_TRAINING_IS_FINISH } from '~/libs/graphql/mutations';
import { useMutation } from '@apollo/client';
import type { UpdateTrainingIsFinishMutation } from '~/types/generated/graphql';

type Props = {
  data?: GetTrainingOneTypeQuery;
};

const Top: VFC<Props> = ({ data }) => {
  const [updateTraining, {}] = useMutation<UpdateTrainingIsFinishMutation>(UPDATE_TRAINING_IS_FINISH);

  const handleClick = (id: number, is_finish: boolean) => {
    updateTraining({ variables: { id: id, is_finish: !is_finish } });
  };

  return (
    <div css={pageTemplate.contentArea}>
      <h2 css={pageTemplate.title}>✏️ 本日のトレーニング</h2>
      {data?.trainings.map((training) => {
        return (
          <div key={training.id}>
            <Accordion sx={{ marginBottom: '5px' }}>
              <AccordionSummary expandIcon={<ExpandMore />} aria-controls='panel1a-content' id='panel1a-header'>
                <Typography>
                  <CheckboxMU initIsChecked={training.is_finish} id={training.id} handleClick={handleClick} />
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
      {data?.trainings.length === 0 && <p>※ 本日予定のトレーニングはありません</p>}
    </div>
  );
};

export default Top;
