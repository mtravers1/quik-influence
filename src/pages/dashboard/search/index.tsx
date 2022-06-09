import MainContent from 'components/MainContent';
import SearchPage from 'modules/Search';
import Head from 'next/head';

const Dashboard = () => {
  return (
    <>
      <Head>
        <title>Search leads - Quick Influence</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainContent>
        <SearchPage />
      </MainContent>
    </>
  );
};

export default Dashboard;
