import React from 'react';
import type { VFC } from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { templates } from '../styles/template';
import type { GetTrainingOneTypeQuery } from '../types/generated/graphql';

type Props = {
  data?: GetTrainingOneTypeQuery;
};

const Top: VFC<Props> = ({ data }) => {
  return (
    <div css={templates.contentArea}>
      <h2 css={templates.title}>✏️ 本日のトレーニング</h2>
      {data?.trainings.map((training) => {
        return (
          <div key={training.id}>
            <Accordion sx={{ marginBottom: '5px' }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
                <Typography>
                  <>
                    {training.is_finish ? <input type='checkbox' checked /> : <input type='checkbox' />}
                    <span style={{ paddingLeft: '20px' }}>{training.training_type.name}</span>
                  </>
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
