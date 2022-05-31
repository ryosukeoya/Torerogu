import React from 'react'
import { pageTemplate } from '~/styles/shares';

export const Loading = () => {
  return (
    <div css={pageTemplate.contentArea} role='loading'>
      <p>Loading...</p>
    </div>
  );
}
