import MainContent from 'components/MainContent';
import { DashboardOverview } from 'modules/Dashboard';
import Head from 'next/head';

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Dashboard - Quick Influence</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainContent>
        <DashboardOverview />
      </MainContent>
    </>
  );
};

export default Dashboard;
