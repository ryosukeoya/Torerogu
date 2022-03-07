import type { NextPage } from 'next';
import type { GetHomePagePropsQuery } from '../types/generated/graphql';
import { GET_HOME_PAGE_PROPS } from '../libs/graphql/queries/home';
import { useQuery } from '@apollo/client';
import { templates } from '../styles/template';
import { useRecoilValue } from 'recoil';
import { headerTabIndexAtom } from '../store';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { getCurrentDate } from '../utils/index';

const Home: NextPage = () => {
  const activeIndex = useRecoilValue<number>(headerTabIndexAtom);

  const { data, error, loading } = useQuery<GetHomePagePropsQuery>(GET_HOME_PAGE_PROPS, {
    variables: { date: getCurrentDate(new Date()) },
    fetchPolicy: 'network-only',
  });
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (activeIndex === 0) {
    return (
      <>
        <div css={templates.contentArea}>
          <h2 css={templates.title}>✏️ 本日のトレーニング</h2>
          {data?.trainings.map((training) => {
            return (
              <>
                <Accordion>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
                    <Typography>
                      <span style={{ display: 'inline-block', paddingRight: '10px' }}>{training.is_finish ? '✅' : '□'}</span>
                      {training.training_type.name}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails sx={{ backgroundColor: '#fcfcfc', borderTop: '1px solid #e3e3e3' }}>
                    <Typography>{training.training_set}セット</Typography>
                    <Typography>{training.training_count}回</Typography>
                    <Typography>{training.training_weight}kg</Typography>
                  </AccordionDetails>
                </Accordion>
              </>
            );
          })}
        </div>
      </>
    );
  } else {
    return <p>history page</p>;
  }
};

export default Home;
