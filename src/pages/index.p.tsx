import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <>
      <div>Home Page</div>
      <Link href='/plan' passHref>
        plan
      </Link>
      <br />
      <Link href='/record' passHref>
        record
      </Link>
      <br />
      <Link href='/graph' passHref>
        graph
      </Link>
    </>
  );
};

export default Home;
