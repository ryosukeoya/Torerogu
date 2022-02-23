import React, { VFC } from 'react';
import Link from 'next/link';

const index: VFC = () => {
  return (
    <>
      <Link href='/' passHref>
        home
      </Link>
    </>
  );
};

export default index;
