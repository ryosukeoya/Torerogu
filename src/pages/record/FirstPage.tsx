import React from 'react';
import type { VFC } from 'react';
import { css } from '@emotion/react';
import { Input, Button } from '../../components/_indexs';
import { inputStyle, buttonStyle } from '../../components/_styles';
import { getDate } from '../../utils';
import { FONT } from '../../styles/const';

const FirstPage: VFC = () => {
  const date = getDate();

  return (
    <div css={styles.contentArea}>
      <h2 css={styles.title}>
        ✏️ {date.month} / {date.day} の記録
      </h2>
      <div css={styles.content}>
        <p>体重</p>
        <Input type={'isInput'} typeAttr='text' placeholder='60' _css={inputStyle} />
        <span>kg</span>
      </div>
      <div css={styles.content}>
        <p>体脂肪率</p>
        <Input type={'isInput'} typeAttr='text' placeholder='10' _css={inputStyle} />
        <span>%</span>
      </div>

      <Button type={'isButton'} text={'記録する'} _css={buttonStyle(10)} />
    </div>
  );
};

export default FirstPage;

const styles = {
  contentArea: css`
    width: 90vw;
    margin: 0 auto;
    padding-top: 30px;
  `,
  title: css`
    padding-bottom: 20px;
    font-size: ${FONT.X1_LARGE};
  `,
  content: css`
    padding-bottom: 15px;
    & p {
      font-size: ${FONT.LARGE};
      padding-bottom: 10px;
    }
  `,
};
