import { useState } from 'react';
import type { VFC } from 'react';
import { ModalWrapper } from '~/components';
import ModalContent from './ModalContent';
import { pageTemplate } from '~/styles/shares/pageTemplate';
import Calendar from 'react-calendar';
import { css } from '@emotion/react';
import { COLOR, FONT } from '~/styles/const';
import { getStringTypeDate } from '~/utils';
import type { GetTrainingTrainingTypeQuery } from '../types/generated/graphql';
import { GET_TRAINING_TRAINING_TYPE } from '~/libs/graphql/queries';
import { useQuery } from '@apollo/client';

const SchedulePage: VFC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const { data, error, loading } = useQuery<GetTrainingTrainingTypeQuery>(GET_TRAINING_TRAINING_TYPE);

  if (loading) {
    return (
      <div css={pageTemplate.contentArea}>
        <p>Loading...</p>
      </div>
    );
  }
  if (error) throw new Error(error.message);

  // TODO
  // 休日色を変えた方がいい
  // 予定と実施違い、出し分けてもいいかもしれない（切り替え）
  // 1日にトレーニングが2個以上ある場合はそれが伝わる形にしないといけない
  // 編集、削除
  // portalのディレクトリはModalWrapperの配下でいいのか

  return (
    <>
      <ModalWrapper isOpen={isOpen} setIsOpen={setIsOpen}>
        <ModalContent selectedDate={selectedDate} data={data} />
      </ModalWrapper>
      <div css={[pageTemplate.contentArea, styles.schedule]}>
        <Calendar
          onClickDay={(value, event) => {
            setIsOpen(true);
            setSelectedDate(value);
          }}
          locale='ja-JP'
          value={new Date()}
          tileContent={
            // ({ activeStartDate, date, view }) => (view === 'month' && getStringTypeDate(date, 'YYYY-MM-DD') === '2022-04-13' ? <p style={{ color: '#fff', fontSize: FONT.X_SMALL, backgroundColor: `${COLOR.RED}73`, borderRadius: '10px', padding: '6px 0' }}>ベンチプレス</p> : null)
            ({ activeStartDate, date, view }) =>
              view === 'month' ? (
                <ul>
                  {data?.trainings.map(
                    (training) =>
                      getStringTypeDate(date, 'YYYY-MM-DD') === training.date && (
                        <li key={training.id} css={styles.tag(training.is_finish)}>
                          {training.training_type.name}
                        </li>
                      ),
                  )}
                </ul>
              ) : null
          }
        />
      </div>
    </>
  );
};

export default SchedulePage;

const styles = {
  schedule: css`
    padding: 30px 0 0 0 !important;
    width: 93%;
    max-width: 900px;
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
      margin-bottom: 50px;
    }

    // トップの奴
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
      &:hover {
        background-color: ${COLOR.ORANGE}1A;
        border-radius: 10px;
      }
    }
    .react-calendar__tile--now {
      background: ${COLOR.ORANGE}1A;
      border-radius: 6px;
      font-weight: bold;
      color: ${COLOR.ORANGE};
    }
  `,
  tags: css``,
  tag: (is_finish: boolean) => css`
    color:#fff;
    background-color: ${is_finish ? `${COLOR.RED}73;` : '#12d4ff73;'}
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
};
