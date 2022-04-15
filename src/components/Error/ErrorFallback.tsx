import React, { VFC } from 'react';
import { FallbackProps } from 'react-error-boundary';
import { PrimaryButton } from '~/components';
import { css } from '@emotion/react';
import { FONT } from '~/styles/const';

const ErrorFallback: VFC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div css={styles.contentArea}>
      <p css={styles.title}>申し訳ございません、予期せぬエラーが発生しました</p>
      <p css={styles.explain}>もう一度実行したい場合は以下のボタンをクリックしてください</p>
      {process.env.NODE_ENV === 'development' && <strong>Error Message:{error.message}</strong>}
      <PrimaryButton type='isButton' theme='simple' title='もう一度実行する' onClick={resetErrorBoundary} />
    </div>
  );
};

export default ErrorFallback;

const styles = {
  contentArea: css`
    padding: 30vh 25px 0 25px;
    text-align: center;
  `,
  title: css`
    font-size: ${FONT.X1_LARGE};
    color: red;
    padding-bottom: 25px;
  `,
  explain: css`
    padding-bottom: 20px;
    line-height: 170%;
  `,
};
