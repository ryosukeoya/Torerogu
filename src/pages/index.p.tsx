import type { NextPage } from 'next';
import { GET_TRAINING_ONE_TYPE } from '../libs/graphql/queries';
import type { GetTrainingOneTypeQuery } from '../types/generated/graphql';
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
import { RippleButton, PrimaryButton, Input, Card } from '../components/entryPoints';
import { textareaStyle } from '../components/uiParts/Input/style';

const Home: NextPage = () => {
  const activeIndex = useRecoilValue<number>(headerTabIndexAtom);

  const { data, error, loading } = useQuery<GetTrainingOneTypeQuery>(GET_TRAINING_ONE_TYPE, {
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
              <div key={training.id}>
                <Accordion sx={{ marginBottom: '5px' }}>
                  <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls='panel1a-content' id='panel1a-header'>
                    <Typography>
                      <>
                        {training.is_finish ? <input type='checkbox' checked /> : <input type='checkbox' />}
                        <span style={{ paddingLeft: '20px' }}>{training.training_type.name}</span>
                      </>
                      {/* <span style={{ display: 'inline-block', paddingRight: '10px' }}>{training.is_finish ? '✅' : '◼︎'}</span> */}
                      {/* {training.training_type.name} */}
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
      </>
    );
  } else {
    return (
      <>
        <p>history page</p>
        <RippleButton
          onClick={() => {
            null;
          }}
        >
          Click me
        </RippleButton>
        <PrimaryButton type={'isButton'} text={'buttonSample'} theme={'simple'} />
        <Input type={'isTextArea'} title={'sample'} css={textareaStyle()} placeholder='テキストを入力してください' cols={30} rows={10} />
        <Card >hoge</Card>
      </>
    );
  }
};

export default Home;
