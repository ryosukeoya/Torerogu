import React, { VFC } from 'react';
import { FallbackProps } from 'react-error-boundary';
import { pageTemplate } from '~/styles/shares';
import { errorPageStyle } from './errorPageStyle';
import { PrimaryButton } from '~/components';

const ErrorFallback: VFC<FallbackProps> = ({ error, resetErrorBoundary }) => {
  return (
    <div css={pageTemplate.contentArea}>
      <p css={errorPageStyle.title}>申し訳ございません、予期せぬエラーが発生しました</p>
      {process.env.NODE_ENV === 'development' && <strong>Error Message:{error.message}</strong>}
      <p css={errorPageStyle.explain}>もう一度実行したい場合は以下のボタンをクリックしてください</p>
      <PrimaryButton type='isButton' theme='simple' title='もう一度実行する' onClick={resetErrorBoundary} />
    </div>
  );
};

export default ErrorFallback;
