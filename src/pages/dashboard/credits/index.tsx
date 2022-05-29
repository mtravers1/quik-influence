import MainContent from 'components/MainContent';
import { DashboardCredits } from 'modules/Dashboard';
import Head from 'next/head';

const Credits = () => {
  return (
    <>
      <Head>
        <title>Add Credits - Quick Influence</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainContent>
        <DashboardCredits />
      </MainContent>
    </>
  );
};

export default Credits;
