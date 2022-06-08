import MainContent from 'components/MainContent';
import ApplicationsOverview from 'modules/Applications';
import Head from 'next/head';

const Applications = () => {
  return (
    <>
      <Head>
        <title>Applications - Quick Influence</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainContent>
        <ApplicationsOverview />
      </MainContent>
    </>
  );
};

export default Applications;
