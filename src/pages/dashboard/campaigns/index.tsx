import MainContent from 'components/MainContent';
import CampaignsOverview from 'modules/Campaigns';
import Head from 'next/head';

const Campaigns = () => {
  return (
    <>
      <Head>
        <title>Campaigns - Quick Influence</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainContent>
        <CampaignsOverview />
      </MainContent>
    </>
  );
};

export default Campaigns;
