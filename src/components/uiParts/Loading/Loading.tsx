import React, { VFC } from 'react';
import { pageTemplate } from '~/styles/shares';

export const Loading: VFC = () => {
  return (
    <div css={pageTemplate.contentArea} role='loading'>
      <p>Loading...</p>
    </div>
  );
};
