import { getSession } from 'next-auth/react';

const About = async () => {
  const session = await getSession();

  return <div>{session?.user?.email}</div>;
};

export default About;
