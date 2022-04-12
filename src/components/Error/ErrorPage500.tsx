import Link from 'next/link';
import type { VFC } from 'react';
import { pageTemplate, link } from '~/styles/shares';
import { errorPageStyle } from './errorPageStyle';

const ErrorPage500: VFC = () => {
  return (
    <div css={pageTemplate.contentArea}>
      <h1 css={errorPageStyle.title}>※ ご指定のページを表示できませんでした</h1>
      <div css={errorPageStyle.explain}>
        <p css={errorPageStyle.paragraph}>システムエラーが発生しております。お手数ですが、しばらく時間を置いてから再度お試しください。</p>
        <p css={errorPageStyle.paragraph}>以下のリンクをクリックするとトップページに遷移することができます。</p>
      </div>
      <Link href={'/'} passHref>
        <a css={link}>トップページはこちら</a>
      </Link>
    </div>
  );
};

export default ErrorPage500;
