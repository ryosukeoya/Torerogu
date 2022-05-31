import { useState, useEffect, useRef, VFC } from 'react';
import { ModalWrapper, PrimaryNavigationPresenter, Spacer } from '~/components';
import ModalContent from './ModalContent';
import { pageTemplate } from '~/styles/shares/pageTemplate';
import Calendar from 'react-calendar';
import { css } from '@emotion/react';
import { COLOR, FONT } from '~/styles/const';
import { getStringTypeDate, getExtractedDataLaterThanTheSpecifiedDate, getDateInRegexp } from '~/utils';
import type { TrainingTrainingType, TrainingScheduleData, ScheduleCategories } from './types';
import { GetTrainingTrainingTypeDocument, GetTrainingTrainingTypeQuery } from '~/libs/graphql/generated/graphql';
import { useQuery } from '@apollo/client';
import { media } from '~/styles/shares';

const SchedulePage: VFC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [activeIndex, setActiveIndex] = useState<number>(1);
  const { data, error, loading } = useQuery<GetTrainingTrainingTypeQuery>(GetTrainingTrainingTypeDocument, {
    fetchPolicy: 'network-only',
  });
  const [trainings, setTrainings] = useState<TrainingTrainingType>(data?.trainings);
  const tileContentCount = useRef(0);

  useEffect(() => {
    setTrainings(data?.trainings);
  }, [data]);

  // isFinishフラグでデータを抽出したものを取得する
  const getExtractedDataInIsFinishFlag = (trainings: TrainingTrainingType, isFinishFlag: boolean) => {
    return trainings?.filter((training) => training.is_finish === isFinishFlag);
  };

  const trainingScheduleData: TrainingScheduleData = {
    ALL: trainings && getExtractedDataLaterThanTheSpecifiedDate<TrainingTrainingType>(trainings, new Date()),
    実施: trainings && getExtractedDataInIsFinishFlag(trainings, true),
    予定: trainings && getExtractedDataLaterThanTheSpecifiedDate<TrainingTrainingType>(getExtractedDataInIsFinishFlag(trainings, false), new Date()),
  };

  if (loading) {
    return (
      <div css={pageTemplate.contentArea}>
        <p>Loading...</p>
      </div>
    );
  }
  if (error) throw new Error(error.message);

  return (
    <>
      <ModalWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
        <ModalContent selectedDate={selectedDate} extractedTrainings={Object.values(trainingScheduleData)[activeIndex]} trainings={trainings} setTrainings={setTrainings} category={Object.keys(trainingScheduleData)[activeIndex] as ScheduleCategories} />
      </ModalWrapper>
      <div css={[pageTemplate.contentArea, styles.schedule]}>
        <PrimaryNavigationPresenter
          titles={Object.keys(trainingScheduleData)}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          colors={[`${COLOR.ORANGE}E6`, `${COLOR.RED}B3`, '#12d4ffB3']}
          backgroundColors={[`${COLOR.ORANGE}B3`, `${COLOR.RED}73`, '#12d4ff73']}
          backgroundColorsAtHover={[`${COLOR.ORANGE}99`, `${COLOR.RED}59`, '#12d4ff59']}
        />
        <Spacer height={20} />
        <Calendar
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          onClickDay={(value, event) => {
            setIsOpen(true);
            setSelectedDate(value);
          }}
          locale='ja-JP'
          value={new Date()}
          // eslint-disable-next-line @typescript-eslint/no-unused-vars
          tileContent={({ activeStartDate, date, view }) => {
            tileContentCount.current = 0;
            return view === 'month' ? (
              <ul>
                {Object.values(trainingScheduleData)[activeIndex]?.map(
                  (training) =>
                  // TODO: 　タイムゾーン？
                    getStringTypeDate(date, 'YYYY-MM-DD') === getDateInRegexp(training.date) &&
                    (() => {
                      if (tileContentCount.current <= 2) {
                        tileContentCount.current++;
                        return (
                          <li key={training.id} css={styles.tag(training.is_finish)}>
                            {training.training_type.name}
                          </li>
                        );
                      } else if (tileContentCount.current === 3) {
                        tileContentCount.current++;
                        return <li css={styles.more}>......</li>;
                      } else {
                        return null;
                      }
                    })(),
                )}
              </ul>
            ) : null;
          }}
        />
      </div>
    </>
  );
};

export default SchedulePage;

const styles = {
  schedule: css`
    padding: 0 0 0 0;
    width: 93%;
    max-width: 900px;
    ${media.pc(
      css`
        padding: 0 0 0 0;
      `,
    )}
    /* ~~~ container styles ~~~ */
    .react-calendar {
      background-color: #fff;
      text-align: center;
      color: ${COLOR.ORANGE};
      border-radius: 10px;
      overflow: hidden;
      box-shadow: 0 3px 12px rgba(0, 0, 0, 0.1); //x軸 y軸 ぼかし 広がり カラー;
      font-family: Arial, Helvetica, sans-serif;
      line-height: 1.125em;
      padding-bottom: 20px;
      margin-bottom: 20px;
    }

    /* ~~~ navigation styles ~~~ */
    .react-calendar__navigation {
      display: flex;
      padding-bottom: 25px;
      border: none;

      // YYYY年M月
      .react-calendar__navigation__label {
        color: ${COLOR.ORANGE};
        font-size: ${FONT.LARGE};
        border: none;
        font-weight: bold;
        cursor: pointer;
      }

      .react-calendar__navigation__arrow {
        color: ${COLOR.ORANGE};
        border: none;
        flex-grow: 0.333;
        cursor: pointer;
      }
    }

    .react-calendar__navigation button {
      background-color: ${COLOR.ORANGE}1A;
      padding: 5px;
    }

    .react-calendar__month-view__weekdays {
      padding-bottom: 10px;
    }

    .react-calendar__tile {
      font-size: ${FONT.SMALL};
      color: black;
      border: none;
      align-self: start;
      padding: 0 2px 40px 2px;
      cursor: pointer;
      @media (hover: hover) {
        margin-bottom: 5px;
        &:hover {
          background-color: ${COLOR.ORANGE}1A;
          border-radius: 10px;
        }
      }
    }
    .react-calendar__tile--now {
      background-color: ${COLOR.RED}12;
      border-radius: 6px;
      font-weight: bold;
      color: ${COLOR.ORANGE};
      color: ${COLOR.RED}85;
    }
  `,
  tags: css``,
  tag: (is_finish: boolean) => css`
    color: #fff;
    background-color: ${is_finish ? `${COLOR.RED}73;` : '#12d4ff73;'};
    font-size: ${FONT.X_SMALL};
    border-radius: 10px;
    padding: 6px 0;
    margin-bottom: 5px;
    display: none;
    &:first-of-type {
      margin-top: 8px;
    }
    &:nth-of-type(-n + 2) {
      display: block;
    }
  `,
  more: css`
    text-align: left;
    padding-left: 20%;
  `,
};
