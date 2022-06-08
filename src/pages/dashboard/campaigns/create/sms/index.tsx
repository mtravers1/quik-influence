import MainContent from 'components/MainContent';
import CreateCampaign from 'modules/Campaigns/CreateCampaign';
import Head from 'next/head';

const Create = () => {
  return (
    <>
      <Head>
        <title>Create SMS campaign - Quick Influence</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MainContent>
        <CreateCampaign type="SMS" initialdata={null} />
      </MainContent>
    </>
  );
};

export default Create;
