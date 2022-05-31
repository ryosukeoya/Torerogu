import React, { VFC, ReactNode } from 'react';
import { PageTabs } from '~/components';
import { useGetTabTitleFromRoute } from '~/hooks';

type Props = {
  mainContentWidth?: number | undefined;
  children: ReactNode;
};

export const PageLayout: VFC<Props> = ({ mainContentWidth, children: mainContentChildren }) => {
  const tabNames = useGetTabTitleFromRoute();

  return (
    <div role='page'>
      <PageTabs
        titles={tabNames}
        width={mainContentWidth}
      />
      {mainContentChildren}
    </div>
  );
};
