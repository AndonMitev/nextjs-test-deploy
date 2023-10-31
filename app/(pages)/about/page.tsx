import { Metadata } from 'next';
import { getSession } from 'next-auth/react';

export const metadata: Metadata = {
  title: 'About',
};

const Page = async () => {
  const session = await getSession();

  return <div>{session?.user?.email}</div>;
};

export default Page;
