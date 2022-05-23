import Link from 'next/link';
import type { VFC } from 'react';
import { pageTemplate, link } from '~/styles/shares';
import { errorPageStyle } from './errorPageStyle';

export const ErrorPage404: VFC = () => {
  return (
    <div css={pageTemplate.contentArea}>
      <h1 css={errorPageStyle.title}>※ ご指定のページが見つかりませんでした</h1>
      <div css={errorPageStyle.explain}>
        <p css={errorPageStyle.paragraph}>ご指定ののページは一時的にアクセスできない状況にあるか、移動もしくは削除されたためURLが間違っている可能性があります。</p>
        <p css={errorPageStyle.paragraph}>以下のリンクをクリックするとトップページに遷移することができます。</p>
      </div>
      <Link href={'/'} passHref>
        <a css={link}>トップページはこちら</a>
      </Link>
    </div>
  );
};
