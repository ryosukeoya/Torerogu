import React from 'react';
import Image from 'next/image';
import { PAGE_TITLE, PAGE_PATH } from '~/constants';
import type { PageTitle } from '~/types';

const ICON = {
  HEIGHT: '28px',
  WIDTH: '28px',
} as const;

export const getIcon = (title: PageTitle, isActive?: boolean): JSX.Element | undefined => {
  const TITLE: string[] = Object.keys(PAGE_PATH);

  switch (title) {
    case TITLE[0]:
      return isActive ? <Image src='/imgs/home_red.png' width={ICON.WIDTH} height={ICON.HEIGHT} alt={PAGE_TITLE[0]} /> : <Image src='/imgs/home.png' width={ICON.WIDTH} height={ICON.HEIGHT} alt={PAGE_TITLE[0]} />;
    case TITLE[1]:
      return isActive ? <Image src='/imgs/plan_red.png' width={ICON.WIDTH} height={ICON.HEIGHT} alt={PAGE_TITLE[1]} /> : <Image src='/imgs/plan.png' width={ICON.WIDTH} height={ICON.HEIGHT} alt={PAGE_TITLE[1]} />;
    case TITLE[2]:
      return isActive ? <Image src='/imgs/record_red.png' width={ICON.WIDTH} height={ICON.HEIGHT} alt={PAGE_TITLE[2]} /> : <Image src='/imgs/record.png' width={ICON.WIDTH} height={ICON.HEIGHT} alt={PAGE_TITLE[2]} />;
    case TITLE[3]:
      return isActive ? <Image src='/imgs/graph_red.png' width={ICON.WIDTH} height={ICON.HEIGHT} alt={PAGE_TITLE[3]} /> : <Image src='/imgs/graph.png' width={ICON.WIDTH} height={ICON.HEIGHT} alt={PAGE_TITLE[3]} />;
    default:
      return;
  }
};
